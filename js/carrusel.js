const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0, // Ajusta este valor para reducir el espacio entre diapositivas

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        800: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 1,
        },
        200: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 3,
        },
    },
});
$(document).ready(function () {
    $('.slick-carousel').slick({
        slidesToShow: 3, // Cambia a 3 para mostrar más elementos
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // Activa el modo centrado
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    spaceBetween: 10,

                }

            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
        nextArrow: '<div class="swiper-button-next" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-b47a45d67edc65b8"></div>',
        prevArrow: '<div class="swiper-button-prev" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-b47a45d67edc65b8"></div>'
    });
});
let boton = document.getElementById("btn-consulta")
let cedual = document.getElementById("numberce")
let nombr = document.getElementById("nombre")
let direcion = document.getElementById("direccion")
let cantidad = document.getElementById("cantiada")
let valor = document.getElementById("total")
let cerr = document.querySelector(".close")
let calcular = document.querySelector(".calcular")
let cerrar = document.getElementById("close")
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
var modalConsulta = new bootstrap.Modal(document.getElementById('preguntaModal'))
var modalcalular = new bootstrap.Modal(document.getElementById('calculosModal'))
var cerrarpregunta = document.querySelector(".pregunta")
//modalConsulta.show();
document.querySelector('.modal').classList.add('zoom');
cerr.addEventListener("click", function () { myModal.hide(); })
calcular.addEventListener("click", function () {
    modalConsulta.hide();
    modalcalular.show();
})
cerrar.addEventListener("click", function () {
    myModal.hide();
})
cerrarpregunta.addEventListener("click", function () {
    console.log("cloc")
    modalConsulta.hide();
})
function MostarPlan(e) {
    modalConsulta.show();
    localStorage.setItem("PLANES", e)
}
function rediret() {
    localStorage.setItem("PLANES", "")
    window.location.href = "contratar.html"
}
boton.addEventListener('click', function (e) {
    console.log(cedual.value)

    if (cedual.value.trim() == "" || cedual.value.trim().length < 5) {
        /* $.alert({
             title: 'Atento!',
             content: 'Ingresa el número de identificación del propietario del servicio!',
         });*/
        return
    }
    Consultas(cedual.value).then(oupt => {
        if (oupt.estado == "exito") {
            let datos = oupt.datos[0]


            myModal.show();
            document.querySelector('.modal').classList.add('zoom');
            nombr.innerHTML = datos.nombre
            direcion.innerHTML = datos.direccion_principal
            cantidad.innerHTML = "Total de Facturas impagas: " + datos.facturacion.facturas_nopagadas
            valor.textContent = datos.facturacion.total_facturas

        }
        console.log(oupt)
    }).catch(err => {
        console.log(err)
    })
    console.log(e)
})
const Consultas = async (parm) => {
    let datos = {
        "cedula": "" + parm,
        "operador": "appspeed"
    }
    try {
        let { data } = await axios.post("https://api.t-ickets.com/mikroti/PortalApi/GetClientsDetails", datos)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}
/**
 $.confirm({
        title: 'Title',
        content: 'url:text.txt',
        onContentReady: function () {
            var self = this;
            this.setContentPrepend('<div>Prepended text</div>');
            setTimeout(function () {
                self.setContentAppend('<div>Appended text after 2 seconds</div>');
            }, 2000);
        },
        columnClass: 'medium',
    });
 */
