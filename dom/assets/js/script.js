//Cambiar el texto del párrafo cuando se presiona el botón
document.getElementById("cambiarTexto").addEventListener("click", function () {
  document.getElementById("parrafo").innerHTML = "Texto actualizado dinámicamente.";
});

// Validación simple del formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
  let nombre = document.getElementById("nombre").value;
  if (nombre.trim() === "") {
    event.preventDefault(); // Detiene el envío del formulario
    alert("El campo nombre es obligatorio.");
  }
});

// Agregar un nuevo párrafo dinámicamente
document.getElementById("agregarElemento").addEventListener("click", function () {
  let nuevoElemento = document.createElement("p");
  nuevoElemento.innerText = "Nuevo párrafo agregado.";
  document.getElementById("contenedor").appendChild(nuevoElemento);
});

// Aplicar animación a la caja
document.getElementById("animar").addEventListener("click", function () {
  document.getElementById("caja").classList.add("mover");
});

// Mostrar y cerrar el modal
document.getElementById("abrirModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});

document.getElementById("cerrarModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});