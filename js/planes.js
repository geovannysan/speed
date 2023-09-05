let phone = document.getElementById("phone");
let televi = document.getElementById("televi");
let computer = document.getElementById("computer");
let verficaplan = document.getElementById("calcular")
const imgElement = document.getElementById('planesimagen');
verficaplan.addEventListener("click", function () {
    var tv = 25 * parseInt(televi.value==""?0:televi.value)
    var ph = 8 * parseInt(phone.value==""?0:phone.value)
    var pc = 15 * parseInt(computer.value==""?0:computer.value)
    const enpr = (tv + pc + ph);
    if (enpr < 100) {
        console.log("recomendar Home")
        
        localStorage.setItem("PLANES", "PLAN-HOME")
        imgElement.src = '/imagen/PLANES WEB-05.png';
        //window.location.href = '/contratar.html';
        return
    }
    if (enpr > 100 && enpr < 130) {
        console.log("recomendar Silver")
        localStorage.setItem("PLANES","PLAN-SILVER")
        imgElement.src = '/imagen/PLANES WEB-04.png';
       // window.location.href = '/contratar.html';
        return
    }
    if (enpr > 130 && enpr < 170) {
        console.log("recomendar Advance")
        localStorage.setItem("PLANES", "PLAN-ADVANCE")
        imgElement.src = '/imagen/PLANES WEB-03.png';
       // window.location.href = '/contratar.html';
        return
    }
    if (enpr > 170 && enpr < 220) {
        console.log("recomendar pro")
        localStorage.setItem("PLANES", "PLAN-PRO")
        imgElement.src = '/imagen/PLANES WEB-02.png';
        //window.location.href = '/contratar.html';
        return
    }
    if (enpr > 220 ) {
        console.log("recomendar Speed")
        localStorage.setItem("PLANES", "PLAN-SPEED")
        imgElement.src = '/imagen/PLANES WEB_Mesa de trabajo 1.png';
        //window.location.href = '/contratar.html';

        return
    }




})
