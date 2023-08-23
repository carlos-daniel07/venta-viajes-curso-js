import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener elementos del DOM

let enlaces = document.querySelectorAll("a");
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let parrafo = document.getElementById("parrafo");
let precio = document.getElementById("precio");

// Agregar evento CLICK a cada enlace

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //Remover activo
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    //Agregar activo
    this.classList.add("active");

    //Traer la info del objeto correspondiente a la eleccion
    let contenido = obtenerContenido(this.textContent);
    console.log(contenido);

    //Mostrar el contenido en el DOM
    titulo.innerHTML = contenido.titulo;
    precio.innerHTML = contenido.precio;
    subtitulo.innerText = contenido.subtitulo;
    parrafo.innerHTML = contenido.parrafo;
  });
});

//Funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
