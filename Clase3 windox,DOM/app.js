/*Dentro del archivo index.html generar:
Capturar a todos los elementos <li>. Luego recorrerlos e imprimir en consola cada uno de ellos. WARNING: NO usar querySelectorAll.*/
var bloqueUL = document.querySelector('ul');
var lis = bloqueUL.children;

var bloqueLI = document.querySelector('li');
var ul = bloqueLI.parentElement;
console.log(lis,ul);
var numbre = 78;
var titulo = document.querySelector('h1');
titulo.innerHTML = '<em>Javascript is '+numbre+' the best my friends!</em>';

var parrafos = document.querySelectorAll('p');
for (var i = 0; i < parrafos.length; i++) {
  if (i%2==0) {
    parrafos[i].innerHTML ='Párrafo número ' +(i+1) + ': <a href="#">enlace generado desde JS</a>';
  }
}
