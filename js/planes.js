let phone = document.getElementById("phone");
let televi = document.getElementById("televi");
let computer = document.getElementById("computer");
let verficaplan = document.getElementById("calcular")

verficaplan.addEventListener("click", function () {
    var tv = 25 * parseInt(televi.value==""?0:televi.value)
    var ph = 8 * parseInt(phone.value==""?0:phone.value)
    var pc = 15 * parseInt(computer.value==""?0:computer.value)
    const enpr = (tv + pc + ph);
    if (enpr < 100) {
        console.log("recomendar Home")
        
        localStorage.setItem("PLANES", "PLAN-HOME")
        window.location.href = '/contratar.html';
        return
    }
    if (enpr > 100 && enpr < 130) {
        console.log("recomendar Silver")
        localStorage.setItem("PLANES","PLAN-SILVER")
        window.location.href = '/contratar.html';
        return
    }
    if (enpr > 130 && enpr < 170) {
        console.log("recomendar Advance")
        localStorage.setItem("PLANES", "PLAN-ADVANCE")
        window.location.href = '/contratar.html';
        return
    }
    if (enpr > 170 && enpr < 220) {
        console.log("recomendar pro")
        localStorage.setItem("PLANES", "PLAN-PRO")
        window.location.href = '/contratar.html';
        return
    }
    if (enpr > 220 ) {
        console.log("recomendar Speed")
        localStorage.setItem("PLANES", "PLAN-SPEED")
        window.location.href = '/contratar.html';

        return
    }




})
function compara(n) {
    console.log(n)
    switch (n) {
        case (n < 100):
            console.log("recomendar Home")
            break;
        case n > 100 && n < 130:
            console.log("recomendar Silver")
            break
        case n > 130 && n < 170:
            console.log("recomendar Advance")
            break
        case n > 170 && n < 220:
            console.log("recomendar pro")
            break
        case n > 220 && n < 350:
            console.log("recomendar Speed")
            break

    }
}