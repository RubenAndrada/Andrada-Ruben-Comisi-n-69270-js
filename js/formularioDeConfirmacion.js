//para guardar datos del cliente
const btnconfirmar = document.querySelector("#btnconfirmar")
const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const dni = document.querySelector("#dni")
const email = document.querySelector("#email")
const telefono = document.querySelector("#telefono")

btnconfirmar.addEventListener("click", function () {
  // VALIDACIÓN: Verifica que todos los campos estén llenos
  if (
    nombre.value.trim() === "" ||
    apellido.value.trim() === "" ||
    dni.value.trim() <= 0  ||
    dni.value.trim() === "" ||
    email.value.trim() === "" ||
    telefono.value.trim() === "" ||
    telefono.value.trim() <= 0
  ) {
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor completá todos los campos antes de continuar.",
    });
    return; // No continúa con el guardado
  }

  // Si todos los campos están completos, se muestra el Swal de confirmación
  Swal.fire({
    title: "Confirmación de datos",
    text: "¿Estás seguro que querés guardar los datos?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
  }).then((result) => {
    if (result.isConfirmed) {
      let datos = {
        ip: Math.random(1, 100),
        btnconfirmar: btnconfirmar.value,
        nombre: nombre.value,
        apellido: apellido.value,
        dni: dni.value,
        email: email.value,
        telefono: telefono.value,
      };

      localStorage.setItem("datos", JSON.stringify(datos));
      window.location.href = "prestamo.html";
    }
  });
});