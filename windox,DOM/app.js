/*Dentro del archivo index.html generar:
En nuestro archivo app.js:
Capturar a todos los elementos <li>. Luego recorrerlos e imprimir en consola cada uno de ellos. WARNING: NO usar querySelectorAll.*/

/*
var bloqueUL = document.querySelector('ul');
var lis = bloqueUL.children;

var bloqueLI = document.querySelector('li');
var ul = bloqueLI.parentElement;
console.log(lis,ul);*/

/*
Capturar el padre de los elementos anteriores (<li>) y mostrarlo en consola.
Capturar al <h1> y cambiar su contenido interno por el siguiente: <em>Javascript is the best my friends!</em>.
Capturar a todos los <p>, recorrerlos y cambiar el contenido interno de los elementos impares por el siguiente: Párrafo número N: <a href="#">enlace generado desde JS</a>. Donde N será el número de párrafo correspondiente.*/
var titulo = document.querySelector('h1');
titulo.innerHTML = '<em>Javascript is the best my friends!</em>';
