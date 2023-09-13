let calcularplan =  document.getElementById("calcularplan")
let continuarpiso = document.getElementById("continuarpiso")
let continuaropcion = document.getElementById("continuaropcion")
let seleccioncasa = new bootstrap.Modal(document.getElementById('seleccionModal'))
let pisosModal = new bootstrap.Modal(document.getElementById('pisosModal'))
let opcionesModal = new bootstrap.Modal(document.getElementById('opcionesModal'))
let contenedor = document.getElementById('contenedor')
let pisoscontenedor = document.getElementById('pisoscontenedor')
let hogarpiso = document.getElementById('hogarpiso')
let continuadevice = document.getElementById('continuadevice')
let dispositivosModal = new bootstrap.Modal(document.getElementById('dispositivosModal'))
calcularplan.addEventListener("click",function(){
    seleccioncasa.show()
})
continuarpiso.addEventListener("click",function(){
    pisosModal.show()
})
continuaropcion.addEventListener("click",function(){
    opcionesModal.show()
})
contenedor.addEventListener('click',(event)=>{
    if (event.target.classList.contains('hijo') || event.target.tagName === 'IMG') {
        const divHijoClicado = event.target.closest('.hijo');
        if (divHijoClicado) {
            const clasesDelHijo = divHijoClicado.classList;
            clasesDelHijo.toggle('selected');
            console.log('Clases del div hijo:', clasesDelHijo);         
        }
    }
})
let divHijoSeleccionado = null;
pisoscontenedor.addEventListener('click',(e)=>{
    if (e.target.classList.contains('hijo') || e.target.tagName === 'IMG') {
        const divHijoClicado = e.target.closest('.hijo');

        if (divHijoClicado) {
           if (divHijoSeleccionado) {
                divHijoSeleccionado.classList.remove('seleccionado');            
            }
            divHijoClicado.classList.add('seleccionado');
            divHijoSeleccionado = divHijoClicado;
        }
    }
})
let divHijoHogar = null
hogarpiso.addEventListener('click',(e)=>{
    console.log(e)
    if (e.target.classList.contains('hijo') || e.target.tagName === 'IMG') {
        const divHijoClicado = e.target.closest('.hijo');
//console.log(divHijoClicado)
        if (divHijoClicado) {
            if (divHijoHogar) {
                divHijoHogar.classList.remove('seleccionado');
                console.log(divHijoHogar)
            }
            divHijoClicado.classList.add('seleccionado');
            divHijoHogar = divHijoClicado;
        }
    }
})

continuadevice.addEventListener('click',(e)=>{
    dispositivosModal.show()
})