//para guardar datos del cliente
//Datos del cliente para confirmar el prestamo

const btnconfirmar = document.querySelector("#btnconfirmar")
const nombre = document.querySelector("#nombre")
const apellido =document.querySelector("#apellido")
const dni = document.querySelector("#dni")

const email = document.querySelector("#email")
const telefono = document.querySelector("#telefono")
const datosAGuardar = document.querySelector(".tarea")
const listadodetareasdatos = document.querySelector("#infoguardadadatos")
const db = window.localStorage

btnconfirmar.onclick = () => {
    let datos = {
        ip : Math.random(1,100),
        btnconfirmar :  btnconfirmar.value,
        nombre :  nombre.value,
        apellido : apellido.value,
        dni :  dni.value,
        email :  email.value,
        telefono :  telefono.value,
        sexoMasculino: document.querySelector("#sexoMasculino"),
        sexoFemenino : document.querySelector("#sexoFemenino"),
        sexoOtros : document.querySelector("#sexoOtros")

    }
   
    guardarDatos(db, datos)
}

cargarDatos (db, listadodetareasdatos)