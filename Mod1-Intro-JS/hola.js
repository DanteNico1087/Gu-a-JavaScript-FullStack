let nombre = 'Carlos';
console.log(`Hola ${nombre}`);

/* Instalación de Node.js y uso básico de npm

 Para ejecutar JavaScript fuera del navegador, instalamos Node.js, un entorno de ejecución de JavaScript
 multiplataforma . Descárgalo desde nodejs.org y sigue el instalador para tu sistema operativo. Node incluye el gestor de paquetes npm (Node Package Manager), esencial para instalar librerías y dependencias.
 Tras instalar, abre una terminal y verifica la instalación: 
 
 node -v -> Debería mostrar la versión de Node instalada npm -v -> Debe mostrar la versión de npm instalada
 
*/

/* Ejecución de scripts con Node.js

 En la terminal, ejecuta: 
 
 node hola.js
 
 Verás la salida ¡Hola Mundo! 
 Node ejecuta el archivo con su propio motor JavaScrit (V8). A diferencia del navegador, Node no tiene DOM ni API de navegador; en cambio provee APIs de sistema
 (filesystem, HTTP, etc.). 
 Esto significa que puedes leer archivos, crear servidores web y más.

 NOTA: Debes estar posicionado en la Carpeta donde se encuentra el archivo .js
 */