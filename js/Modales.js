let calcularplan = document.getElementById("calcularplan")
let seleccionModalback = document.getElementById("seleccionModalback")
let continuarpiso = document.getElementById("continuarpiso")
let pisomodalback = document.getElementById("pisomodalback")
let continuaropcion = document.getElementById("continuaropcion")
let opcionesback = document.getElementById("opcionesback")
let continuarestimado = document.getElementById("continuarestimado")
let seleccioncasa = new bootstrap.Modal(document.getElementById('seleccionModal'))
let pisosModal = new bootstrap.Modal(document.getElementById('pisosModal'))
let opcionesModal = new bootstrap.Modal(document.getElementById('opcionesModal'))
let contenedor = document.getElementById('contenedor')
let pisoscontenedor = document.getElementById('pisoscontenedor')
let hogarpiso = document.getElementById('hogarpiso')
let continuadevice = document.getElementById('continuadevice')
let dispositivoback = document.getElementById('dispositivoback')
let dispositivosModal = new bootstrap.Modal(document.getElementById('dispositivosModal'))
let dispositivocontenedor = document.getElementById('dispositivocontenedor')
var modalcalular = new bootstrap.Modal(document.getElementById('calculosModal'))
let estimadoModal = new bootstrap.Modal(document.getElementById('estimadoModal'))
//let puntopago = new bootstrap.Modal(document.getElementById('puntodePago'))
//estimadoModal.show()
let megas = 0

let cantidadclick = {
    "pequeña": 20,
    "mediana": 40,
    "grande": 30,
    "uno": 10,
    "dos": 20,
    "tres": 25,
    "cuatro": 30,
    "cinco": 54,
    "siete": 70,
    "ocho": 85,
    "dies": 108
}

calcularplan.addEventListener("click", function () {
    console.log("aqui")
    seleccioncasa.show()
    modalcalular.hide()
})
seleccionModalback.addEventListener("click", function () {
    seleccioncasa.hide()
    modalcalular.show()
})
continuarpiso.addEventListener("click", function () {
    opcionesModal.show()
    seleccioncasa.hide()
})
pisomodalback.addEventListener("click", function () {
    opcionesModal.hide()
    seleccioncasa.show()
})
continuaropcion.addEventListener("click", function () {
    opcionesModal.show()
    seleccioncasa.hide()
})
opcionesback.addEventListener("click", function () {
    opcionesModal.hide()
    seleccioncasa.show()
})
continuadevice.addEventListener('click', () => {
    dispositivosModal.show()
    opcionesModal.hide()
})

dispositivoback.addEventListener('click', function () {
    dispositivosModal.hide()
    opcionesModal.show()
})

//#5db7af
//#54ab34
//#fb5b24
//#7c14ab
//#2596be
let registrapago = document.getElementById('registrapago')
registrapago.addEventListener('click', () => {

    const elemento = document.getElementById("plansuge");
    console.log("aqui")
    window.open("https://api.whatsapp.com/send?phone=593997500911&amp;text=Vi%20su%20pagina%20web,%20quiero%20contratar%20sus%20servicios%20para%20mi%20domicilio", '_blank'
    )
    if (megas < 120) {
        elemento.style.backgroundColor = "#2596be";
        elemento.textContent = "Plan Home"
        imagen.src = "/imagen/carrusel/plam160mg.jpg"
        localStorage.setItem("PLANES", "plam160mg")
    }
    if (megas >= 120 && megas <= 150) {
        elemento.style.backgroundColor = "#54ab34";
        elemento.textContent = "Plan Silver"
        imagen.src = "/imagen/carrusel/plansilver.jpg"
        localStorage.setItem("PLANES", "carrusel/plansilver")
    }
    if (megas >= 180 && megas < 200) {
        elemento.style.backgroundColor = "#7c14ab";
        elemento.textContent = "Plan Advance"
        imagen.src = "/imagen/carrusel/PLANADVANCE.jpg"
        localStorage.setItem("PLANES", "carrusel/PLANADVANCE")
    }
    if (megas >= 200 && megas < 220) {
        elemento.style.backgroundColor = "#5db7af";
        elemento.textContent = "Plan Pro"
        imagen.src = "/imagen/carrusel/planpro.jpg"
        localStorage.setItem("PLANES", "carrusel/planpro")
    }
    if (megas >= 220) {
        elemento.style.backgroundColor = "#fb5b24";
        elemento.textContent = "Plan Speed"
        imagen.src = "/imagen/carrusel/plam700mg.jpg"
        localStorage.setItem("PLANES", "carrusel/plam700mg")
    }
})
continuarestimado.addEventListener("click", function () {
    const elemento = document.getElementById("plansuge");
    const imagen = document.getElementById("imgsuge")
    if (megas < 120) {
        elemento.style.backgroundColor = "#2596be";
        elemento.textContent = "Plan Home"
        imagen.src = "/imagen/carrusel/plam160mg.jpg"
        localStorage.setItem("PLANES", "plam160mg")
    }
    if (megas >= 120 && megas < 180) {
        elemento.style.backgroundColor = "#54ab34";
        elemento.textContent = "Plan Silver"
        imagen.src = "/imagen/carrusel/plansilver.jpg"
        localStorage.setItem("PLANES", "carrusel/plansilver")
    }
    if (megas >= 180 && megas < 200) {
        elemento.style.backgroundColor = "#7c14ab";
        elemento.textContent = "Plan Advance"
        imagen.src = "/imagen/carrusel/PLANADVANCE.jpg"
        localStorage.setItem("PLANES", "carrusel/PLANADVANCE")
    }
    if (megas >= 200 && megas < 220) {
        elemento.style.backgroundColor = "#5db7af";
        elemento.textContent = "Plan Pro"
        imagen.src = "/imagen/carrusel/planpro.jpg"
        localStorage.setItem("PLANES", "carrusel/planpro")
    }
    if (megas >= 220) {
        elemento.style.backgroundColor = "#fb5b24";
        elemento.textContent = "Plan Speed"
        imagen.src = "/imagen/carrusel/plam700mg.jpg"
        localStorage.setItem("PLANES", "carrusel/plam700mg")
    }
    dispositivosModal.hide()
    estimadoModal.show()
})




contenedor.addEventListener('click', (event) => {
    if (event.target.classList.contains('hijo') || event.target.tagName === 'IMG' || event.target.tagName === 'SPAN') {
        const divHijoClicado = event.target.closest('.hijo');
        if (divHijoClicado) {
            // console.log(clasesDelHijo)
            const clasesDelHijo = divHijoClicado.classList;
            if (clasesDelHijo.contains('selected')) {
                clasesDelHijo.remove('selected');

                megas = megas - 8
                // console.log('Clases del div hijo:', clasesDelHijo);
            } else {
                clasesDelHijo.add('selected');
                megas = megas + 8
            }
            console.log(megas)
        }
    }
})
let divHijoCasa = null;
dispositivocontenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('hijo') || e.target.tagName === 'IMG' || e.target.tagName === 'SPAN') {
        const divHijoClicado = e.target.closest('.hijo');

        if (divHijoClicado) {
            if (divHijoCasa) {
                divHijoCasa.classList.remove('seleccionado');
                megas = megas - cantidadclick[divHijoCasa.id]
                console.log(divHijoCasa)
            }
            divHijoClicado.classList.add('seleccionado');
            megas = megas + cantidadclick[divHijoClicado.id]
            divHijoCasa = divHijoClicado;
        }
    }
    console.log(megas)
})
let divHijoSeleccionado = null;
pisoscontenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('hijo') || e.target.tagName === 'IMG' || e.target.tagName === 'SPAN') {
        const divHijoClicado = e.target.closest('.hijo');

        if (divHijoClicado) {
            if (divHijoSeleccionado) {
                divHijoSeleccionado.classList.remove('seleccionado');
                megas = megas - cantidadclick[divHijoSeleccionado.id]
            }
            divHijoClicado.classList.add('seleccionado');
            megas = megas + cantidadclick[divHijoClicado.id]
            divHijoSeleccionado = divHijoClicado;
        }
        console.log(megas)
    }
})
let divHijoHogar = null

hogarpiso.addEventListener('click', (e) => {

    if (e.target.classList.contains('hijo') || e.target.tagName === 'IMG' || e.target.tagName === 'SPAN') {
        const divHijoClicado = e.target.closest('.hijo');

        if (divHijoClicado) {
            if (divHijoHogar) {
                divHijoHogar.classList.remove('seleccionado');
                // console.log(divHijoHogar)
                megas = megas - cantidadclick[divHijoHogar.id]
            }
            divHijoClicado.classList.add('seleccionado');
            // console.log(cantidadclick[divHijoClicado.id])
            megas = megas + cantidadclick[divHijoClicado.id]
            divHijoHogar = divHijoClicado;
        }
        console.log(megas)
    }
})



function Abrir_Puntos_Pago() {
    puntopago.toggle()
}