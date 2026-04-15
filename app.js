// ===============================
// MANIPULACIÓN DEL DOM
// ===============================

// Función para mostrar/ocultar por categoría
function mostrarCategoria(categoria) {
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    if (categoria === "todos") {
      item.style.display = "block";
    } else {
      if (item.dataset.categoria === categoria) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}

// Función para cambiar contenido dinámicamente
function cambiarContenido() {
  const primeraCard = document.querySelector(".item");

  const titulo = primeraCard.querySelector("h4");
  const texto = primeraCard.querySelector("p");

  titulo.textContent = "Contenido actualizado";
  texto.textContent = "Este contenido fue cambiado con JavaScript.";
}