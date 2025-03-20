
//Datos para simular prestamo
const monto = document.querySelector("#monto")
const btncalcular = document.querySelector("#btncalcular")

const listadodetareas = document.querySelector("#infoguardada")

const db = window.localStorage

const botonDeconfirmacion = document.querySelector(".iconocheck")



btncalcular.onclick = () => {
    let prestamo = {
        id: Math.random(1,100),
        monto: monto.value,
        cuota1 : document.querySelector("#cuota1").checked,
        cuota3 : document.querySelector("#cuota3").checked,            
        cuota6 : document.querySelector("#cuota6").checked,
        cuota9 : document.querySelector("#cuota9").checked,
        cuota12: document.querySelector("#cuota12").checked,

        
    }
   
    guardarPrestamo(db, prestamo)
}

cargarPrestamo (db, listadodetareas)




