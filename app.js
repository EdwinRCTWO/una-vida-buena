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
// ===============================
// ANIMACIONES AL HACER SCROLL
// ===============================

// Seleccionamos todos los elementos que queremos animar
const elementos = document.querySelectorAll(".card, .art-item, .recurso-item");

// Les agregamos la clase oculto al inicio
elementos.forEach(el => {
  el.classList.add("oculto");
});

// Creamos el observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("mostrar");
    }
  });
});

// Observamos cada elemento
elementos.forEach(el => observer.observe(el));
