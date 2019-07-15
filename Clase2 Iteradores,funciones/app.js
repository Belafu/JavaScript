for (var i = 1; i < 46; i++) {
  console.log("3 x "+ i +" = " +3*i);
}

var num = Math.floor(Math.random() * 6)+1;
console.log(num);
switch (num) {
  case 1: case 3: case 5:
    console.log("El número "+ num + " es impar");
    break;
  default:
    console.log("El número "+ num + " es par");
}

var ale = Math.floor(Math.random() * 37)+1;
var contador = 0;
while (ale != 19) {
ale = Math.floor(Math.random() * 37)+1;
contador++;
}
console.log("Salió el número 19, se tomaron "+contador+" intentos para ello");

var lista = [];
for (var i = 1; i <= 100; i++) {
  if (i%2==1) {
      continue;
  }
  lista.push(i);
}
console.log(lista);

var estudiante = {
  nombre:"Pedro",
  curso: "Mate",
  dni: 123456,
  email: "ale@dh.com"
};
function fromObjectToArray(objeto){
  var arr = [];
  for (var prop in objeto) {
    arr.push(prop + ': ' + objeto[prop]);
  }
  return arr;
}
console.log(fromObjectToArray(estudiante));

function cambiarColorDeFondoDelBody(color){
  var body = document.querySelector('body');
  if (color != "#0f0" && color != "#00ff00") {
    body.style.color = color;
    return true;
  }
  return false;
}

var parrafos = document.querySelectorAll("p");
var cambiarParrafos = function(parrafos){
  var contadorImpares =0 ;
  for (var i = 0; i < parrafos.length; i++) {
    if (i%2==0) {
      parrafos[i].style.color = "red";
      parrafos[i].style.fontWeight = "bold";
      parrafos[i].style.textAlign = "center";
    }
    else {
      contadorImpares++;
    }
  }
  return contadorImpares;
}
console.log("Párrafos que no se vieron afectados: "+cambiarParrafos(parrafos) );
/*Métodos de Array
Dentro del archivo app.js, crear:
Un array de números del 1 al 20.*/
var array =[];
for (var i = 1; i <= 20; i++) {
  array.push(i);
}
var raizCuadrada = array.map(function(elemento){
return Math.sqrt(elemento);
});
console.log(raizCuadrada);

var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, "v", 5, "e", 6];
var numeros = enigma.filter(function(elem){
  return typeof elem === 'number';
});
arrSum = function(arr){
  return arr.reduce(function(a,b){
    return a + b
  }, 0);
}
var alturaCalle = arrSum(numeros);
var letras = enigma.filter(function(elem){
  return typeof elem === 'string';
});
var nombreCalle = letras.join("");
console.log("La Calle es perseverancia "+alturaCalle);
