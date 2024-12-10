document.addEventListener("DOMContentLoaded", async function () {

    var map = L.map('map', {
        maxZoom: 18
    });

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latlng = [position.coords.latitude, position.coords.longitude];

            map.setView(latlng, 16);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);


        });
    } else {
        map.setView([40.416775, -3.703790], 6); // 6 es el nivel de zoom

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    let { data } = await axios.get("http://45.224.96.50:1211/api/v1/cajas_nat")

    if (data.success == true) {
        var groups = {};
        var marcadores = data.data.map(function (item) {
            if (String(item.coordenadas).includes(",")) {
                var nombre = item.descripcion.replace(/-[A-Z0-9]+$/, '');
                return {
                    nombre: item.descripcion,
                    coordenadas: [item.coordenadas.split(",")[0], item.coordenadas.split(",")[1]],
                    ubicacion: nombre,
                    id: item.id
                };
            }
        }).filter(e => e != undefined);

        marcadores.forEach(function (marcador) {
            var group = marcador.ubicacion;
            if (!groups[group]) {
                groups[group] = L.layerGroup();

            }
            var marker = L.marker(marcador.coordenadas, {
                draggable: false // Habilitar el arrastre del marcador
            }).addTo(groups[group])
                .bindPopup('<b>' + marcador.nombre + '</b><br/><button class="btn-sm btn-success" onclick="obtener_Puertos(' + marcador.id + ',' + marcador.puertos + ',' + marcador.usados + ')">Haz clic aquí</button>');

            marker.on('click', function (e) {

                if (!this.polyline) {
                    console.log(map)
                    this.polyline = L.polyline([this.getLatLng()], {
                        color: 'red'
                    }).addTo(map);
                    map.on('click', addPoint);
                }
            });

            function addPoint(e) {
                var latlngs = this.polyline.getLatLngs();
                latlngs.push(e.latlng);
                this.polyline.setLatLngs(latlngs);
            }
        });

        var controlLayers = L.control.layers(null, groups, { collapsed: true }).addTo(map);

        // Desactivar todos los grupos
        var groupSelector = document.getElementById('ubicacion');
        //groupSelector.innerHTML = '';
        Object.keys(groups).forEach(function (key) {
            var option = document.createElement('option');
            option.value = key;
            option.text = key;
            groupSelector.appendChild(option);
            map.removeLayer(groups[key]);
        });
        // document.body.appendChild(groupSelector);
        // Activar el primer grupo
        var firstGroup = Object.keys(groups)[0];
        if (firstGroup) {
            controlLayers.addOverlay(groups[firstGroup], firstGroup);
        }
        groupSelector.addEventListener('change', function () {
            var selectedGroup = groupSelector.value;
            Object.keys(groups).forEach(function (key) {
                map.removeLayer(groups[key]);
            });
            map.eachLayer(function (layer) {
                if (groups[selectedGroup].hasLayer(layer)) {
                    map.removeLayer(layer);
                }
            });
            map.addLayer(groups[selectedGroup]);
            var groupBounds = getGroupBounds(groups[selectedGroup]);
            if (groupBounds.isValid()) {
                map.fitBounds(groupBounds);
            }
        });

        // Función para obtener los límites de un grupo de marcadores
        function getGroupBounds(group) {
            var bounds = new L.LatLngBounds();
            group.eachLayer(function (layer) {
                bounds.extend(layer.getLatLng());
            });
            return bounds;
        }
        
        function getMarkersNearby(latlng, radius) {
            var nearbyMarkers = [];
            Object.keys(groups).forEach(function (key) {
                groups[key].eachLayer(function (marker) {
                    var distance = marker.getLatLng().distanceTo(latlng);
                    if (distance <= radius) {
                        nearbyMarkers.push(marker);
                    }
                });
            });
            return nearbyMarkers;
        }

        // Función para pintar los marcadores cercanos en el mapa
        function showNearbyMarkers(nearbyMarkers) {
            nearbyMarkers.forEach(function (marker) {
                marker.addTo(map);
            });
        }

        // Función para limpiar los marcadores del mapa
        function clearMarkers() {
            Object.keys(groups).forEach(function (key) {
                groups[key].eachLayer(function (marker) {
                    map.removeLayer(marker);
                });
            });
        }
        // Función para centrar el mapa en una ubicación y mostrar los marcadores cercanos
        function centerMapAndShowMarkers(latlng, radius) {
            // Limpiar marcadores existentes
            clearMarkers();

            // Obtener los marcadores cercanos
            var nearbyMarkers = getMarkersNearby(latlng, radius);

            // Mostrar los marcadores cercanos en el mapa
            showNearbyMarkers(nearbyMarkers);
            L.marker(latlng).addTo(map)
                .bindPopup('Tu ubicación')
                .openPopup();
            // Centrar el mapa en la ubicación
            map.setView(latlng);
        }

        // Ejemplo de uso: Obtener todos los marcadores cercanos a una coordenada
        var center = L.latLng(-2.128085, -79.935903); // Coordenada de ejemplo
        var radius = 1000; // Radio en metros
        var nearbyMarkers = getMarkersNearby(center, radius);
       // clearMarkers(); // Limpiar marcadores existentes
        centerMapAndShowMarkers(center,radius); 
        
    }
    // Cambiar el diseño del mapa (similar a Google Maps)

});
async function obtener_Puertos(e,puer,usa) {
    console.log(e)
    let data = JSON.stringify({
        "idnat": e
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://45.224.96.50:1211/api/v1/puerto_nat',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };


    try {
        let { data } = await axios.request(config)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const toggleNav = () => {
    const toggleOpen = document.querySelector(".toggle--open");
    const toggleClose = document.querySelector(".toggle--close");
    const menu = document.querySelector("nav ul");
    const layout = document.querySelector(".page-wrap");

    const openMenu = () => {
        menu.dataset.hidden = "false";
        toggleOpen.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
        menu.dataset.hidden = "true";
        toggleOpen.setAttribute("aria-expanded", "false");
    };

    toggleOpen.addEventListener("click", openMenu, true);
    toggleClose.addEventListener("click", closeMenu, true);
};

toggleNav();
