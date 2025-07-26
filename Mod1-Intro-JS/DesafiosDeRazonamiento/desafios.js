//  Desafíos de razonamiento

//  1. Cadena vs número: ¿Qué imprime en la consola el siguiente código y por qué?

let a = "5";
let b = 4;
console.log(a + b);

//  2. Ámbito de bloque: Dado este código, ¿qué mostrará la consola?

let valor = '5';
if (true) {
    let valor = 4;
}
console.log(valor);


/* Recursos adicionales

● MDN Web Docs (Español) – Guía de JavaScript – Documentación oficial, cubre desde lo básico
 hasta avanzado. 

● MDN Web Docs – Tipos de datos y variables – Explicación de tipado dinámico y valores
 primitivos. 

● ECMAScript® 2025 (ES16) Language Specification – Especificación oficial en inglés de
 ECMAScript (busca la versión 2025). 

● Eloquent JavaScript (4ª ed.) en español – Libro gratuito en línea que enseña JS moderno desde
 cero (traducción de Marijn Haverbeke). 

● You Don’t Know JS (serie traducida) – Colección de libros de Kyle Simpson profundos de JS,
 traducidos al español. 

● Learn JS (es.javascript.info) – Tutorial interactivo en español con ejemplos claros sobre
 JavaScript moderno. 

● Vídeos (YouTube): Busca canales actuales como “Midudev” o “Fazt” que tienen series de JavaScript
 en español para principiantes. */