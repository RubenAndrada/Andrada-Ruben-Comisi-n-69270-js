const guardarPrestamo = (db, prestamo) =>{
    db.setItem(prestamo.id, JSON.stringify(prestamo))
    window.location.reload(true)
    
}

const cargarPrestamo = (db, parentNode) =>{
    let claves = Object.keys(db)
    for(clave of claves ){
        let prestamo = JSON.parse(db.getItem(clave))
        calcularCuotas(parentNode, prestamo, db)
    }
}

function calcularCuotas(parentNode, prestamo, db){

    if(prestamo.cuota1==true ){ 
        
        dineroaprestar = prestamo.monto

        interesdecuotas = Number(0.102662)
        cantidaddecuotas= Number(1)
        crearPrestamo (parentNode, prestamo,db)
            
    }
    else if(prestamo.cuota3==true){
        dineroaprestar = prestamo.monto
        interesdecuotas = Number(1.10094558)
        cantidaddecuotas= Number(3)
        crearPrestamo (parentNode, prestamo,db)
            
    }
    else if(prestamo.cuota6==true){
        dineroaprestar = prestamo.monto
        interesdecuotas = Number(1.21830696)
        cantidaddecuotas= Number(6)
        crearPrestamo (parentNode, prestamo,db)
        
            
    }
    else if(prestamo.cuota9==true){
        dineroaprestar = prestamo.monto
        interesdecuotas = Number(1.34335854)
        cantidaddecuotas= Number(9)
        crearPrestamo (parentNode, prestamo,db)
        
            
    }
    else if(prestamo.cuota12==true){
        dineroaprestar = prestamo.monto
        interesdecuotas = Number(1.4755548)
        cantidaddecuotas= Number(12)
        crearPrestamo (parentNode, prestamo,db)
        
            
    }
        
    
}



const crearPrestamo = (parentNode, prestamo,db) =>{

    let dineroapagar = Number(((dineroaprestar*interesdecuotas)/cantidaddecuotas).toFixed(2))
    let dineroadevolver = Number((dineroaprestar*interesdecuotas).toFixed(2))

    let divPrestamo = document.createElement(`div`)
    let cuotasPrestamo = document.createElement(`p`)
    let interesPrestamo = document.createElement(`p`)
        
    let totalADevolverPrestamo = document.createElement(`p`)
    let iconoAceptar= document.createElement(`span`)
    let iconoBorrar= document.createElement(`span`)
    
    interesPrestamo.innerHTML = dineroapagar
    cuotasPrestamo.innerHTML = cantidaddecuotas
    totalADevolverPrestamo.innerHTML= dineroadevolver
    iconoAceptar.innerHTML= "Aceptar prestamo"
    iconoBorrar.innerHTML= `delete_forever`
    
    divPrestamo.classList.add(`tarea`)
    iconoAceptar.classList.add(`iconocheck`)

    iconoBorrar.classList.add(`material-symbols-outlined`, `icono`)

    iconoAceptar.addEventListener("click", () =>{
        prestamo
        location.href= 'formconfirm.html'
    })
    
    iconoBorrar.onclick = () =>{
        db.removeItem(prestamo.id)
        window.location.reload(true)
    }
    
    divPrestamo.appendChild(cuotasPrestamo)
    divPrestamo.appendChild(interesPrestamo)
    divPrestamo.appendChild(totalADevolverPrestamo)
    divPrestamo.appendChild(iconoAceptar)
    divPrestamo.appendChild(iconoBorrar)
    
    parentNode.appendChild(divPrestamo)

    crearDatos  (parentNode, datos, prestamo, db)
    
    
    }



const guardarDatos = (db, datos) =>{
    db.setItem(datos.ip, JSON.stringify(datos))
    window.location.reload(true)
        
}

const cargarDatos = (db, parentNode) =>{
    let claves2 = Object.keys(db)
    for(clave1 of claves2 ){
        let datos = JSON.parse(db.getItem(clave1))
        crearDatos (parentNode, datos, db)
    }
}


const crearDatos = (parentNode, datos, db)=>{
    let divDatos = document.createElement(`div`)
    let nombreDatos = document.createElement(`p`)
    let apellidoDatos = document.createElement(`p`)
    let dniDatos = document.createElement(`p`)
    let emailDatos = document.createElement(`p`)
    let telefonoDatos = document.createElement(`p`)
    let iconoBorrar= document.createElement(`span`)
    
    
    nombreDatos.innerHTML = datos.nombre
    apellidoDatos.innerHTML = datos.apellido
    dniDatos.innerHTML= datos.dni 
    emailDatos.innerHTML= datos.email
    telefonoDatos.innerHTML= datos.telefono
    iconoBorrar.innerHTML= `delete_forever`


    divDatos.classList.add(`tarea`)
    
    iconoBorrar.classList.add(`material-symbols-outlined`, `icono`)
    
    iconoBorrar.onclick = () =>{
        db.removeItem(datos.ip)
        window.location.reload(true)
    }
    
    divDatos.appendChild(nombreDatos)
    divDatos.appendChild(apellidoDatos)
    divDatos.appendChild(dniDatos)
   
    divDatos.appendChild(emailDatos)
    divDatos.appendChild(telefonoDatos)
    divDatos.appendChild(iconoBorrar)
    
    parentNode.appendChild(divDatos)

    
}
