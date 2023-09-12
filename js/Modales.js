let calcularplan =  document.getElementById("calcularplan")
let continuarpiso = document.getElementById("continuarpiso")
let seleccioncasa = new bootstrap.Modal(document.getElementById('seleccionModal'))
let pisosModal = new bootstrap.Modal(document.getElementById('pisosModal'))

calcularplan.addEventListener("click",function(){
    seleccioncasa.show()
})
continuarpiso.addEventListener("click",function(){
    pisosModal.show()
})