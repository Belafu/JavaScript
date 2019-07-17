var entro = window.confirm('quiere iniciar');
if (entro) {
var cantInt = prompt("Decime la cantidad de integrantes de tu familia");
  while (isNaN(cantInt) || cantInt < 3) {
    alert("nesecito un numero mayor a 2")
    cantInt = prompt("Decime la cantidad de integrantes de tu familia");
  }
var integrantes = [];
for (var i = 0; i < cantInt; i++) {
  var nombre = prompt("Nombre de la "+(i+1)+" persona");
  while (!isNaN(nombre)) {
    alert("esta vacio o nesecito un string");
    nombre = prompt("Nombre de la "+(i+1)+" persona");
  }
  var gasto = prompt("Gasto de "+ nombre);
  while (isNaN(gasto) || gasto=="" ) {
    alert("esta vacio o nesecito un numero");
    gasto = prompt("Gasto de "+ nombre);
  }
  integrantes.push({nombre: nombre,gasto: parseInt(gasto)});
}
console.log(integrantes);

var menor = integrantes.reduce(function (a,b) {
if (a.gasto < b.gasto) {
  return a;
}
return b;
});

var mayor = integrantes.reduce(function (a,b) {
if (a.gasto > b.gasto) {
  return a;
}
return b;
});

var suma = 0;
for (var i = 0; i < integrantes.length; i++) {
  suma = suma + integrantes[i].gasto ;
}
var promedio = suma /(integrantes.length) ;

console.log(menor,mayor);
console.log("El promedio es "+ promedio);


}else {
  alert("gracias por aver venido");
  location.href ='https://youtube.com' ;
  //redireccionar a NEtflkix
}
