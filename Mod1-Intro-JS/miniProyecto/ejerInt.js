let nombre = document.querySelector("#name");
let boton = document.querySelector("#saludar");
let parrafo = document.querySelector("#parrafo");

boton.addEventListener('click', () => {
parrafo.textContent = "Hola " + nombre.value + ", bienvenido a tu primer proyecto en JavaScript!";

console.log("Hola " + nombre.value + ", bienvenido a tu primer proyecto en JavaScript!");
});
