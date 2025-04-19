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

const datosGuardada = localStorage.getItem("datos");
if(datosGuardada){
    const datosGuardados = JSON.parse(datosGuardada);
    document.getElementById("datosGuardados").innerHTML = `
    <p>Nombre: ${datosGuardados.nombre}</p>
    <p>Apellido: ${datosGuardados.apellido}</p>
    <p>Dni: ${datosGuardados.dni}</p>
    <p>Email: ${datosGuardados.email}</p>
    <p>Telefono: ${datosGuardados.telefono}</p>
  `;
    
}


async function calcularCuotas(parentNode, prestamo, db){
    try{
        const cuotasConfig = {
            cuota1: { multiplicador: 1.102662, cuotas: 1 },
            cuota3: { multiplicador: 1.10094558, cuotas: 3 },
            cuota6: { multiplicador: 1.21830696, cuotas: 6 },
            cuota9: { multiplicador: 1.34335854, cuotas: 9 },
            cuota12: { multiplicador: 1.4755548, cuotas: 12 }
          };

          for (let cuota in cuotasConfig) {
            if (prestamo[cuota]) {
              dineroaprestar = prestamo.monto;
              interesdecuotas = cuotasConfig[cuota].multiplicador;
              cantidaddecuotas = cuotasConfig[cuota].cuotas;
              crearPrestamo(parentNode, prestamo, db);
              break;
            }
        }
          
          
    }  
    catch (error){
        console.log(error)

    }  
    
}



const crearPrestamo = (parentNode, prestamo, db) => {
    const dineroapagar = Number(((dineroaprestar * interesdecuotas) / cantidaddecuotas).toFixed(2));
    const dineroadevolver = Number((dineroaprestar * interesdecuotas).toFixed(2));
  
    const crearParrafo = (texto) => {
      const p = document.createElement("p");
      p.innerHTML = texto;
      return p;
    };
  
    const divPrestamo = document.createElement("div");
    divPrestamo.classList.add("tarea");
  
    const iconoAceptar = document.createElement("span");
    iconoAceptar.innerHTML = "Aceptar prestamo";
    iconoAceptar.classList.add("iconocheck");
  
    const iconoBorrar = document.createElement("span");
    iconoBorrar.innerHTML = "delete_forever";
    iconoBorrar.classList.add("material-symbols-outlined", "icono");
  
    iconoAceptar.addEventListener("click", () => {
      Swal.fire({
        title: "Aceptar préstamo",
        text: "¿Estás seguro que quieres aceptar el préstamo?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Préstamo aprobado, vuelva pronto!",
            showConfirmButton: false,
            timer: 3000,
          });
          setTimeout(() => {
            localStorage.clear();
            location.href = "index.html";
          }, 3500);
        }
      });
    });
  
    iconoBorrar.onclick = () => {
      db.removeItem(prestamo.id);
      window.location.reload(true);
    };
  
    // Añadir todos los elementos al div
    divPrestamo.append(
      crearParrafo(`Dinero solicitado: $${dineroaprestar}`),
      crearParrafo(`Cantidad de cuotas: ${cantidaddecuotas}`),
      crearParrafo(`Pago mensual: $${dineroapagar}`),
      crearParrafo(`Total a devolver: $${dineroadevolver}`),
      iconoAceptar,
      iconoBorrar
    );
  
    parentNode.appendChild(divPrestamo);
  };