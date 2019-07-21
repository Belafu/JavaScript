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

var body = document.querySelector('body');
var titulo = document.createElement('h1');
titulo.innerText = "Reporte de gastos familiares";
body.append(titulo);

var parrafoMayor = document.createElement('p');
parrafoMayor.innerText = "El que Mas gasto es " + mayor.nombre + "  un total de: " + mayor.gasto;
body.append(parrafoMayor);

var parrafoMenor = document.createElement('p');
parrafoMenor.innerText = "El que Menos gasto es " + menor.nombre + "  un total de: " + menor.gasto;
body.append(parrafoMenor);

var parrafoPromedio = document.createElement('p');
parrafoPromedio.innerText = "El  promedio de gastos del día: " + promedio ;
body.append(parrafoPromedio);

var caja_ul = document.createElement('ul');
body.append(caja_ul);
for (var i = 0; i < integrantes.length; i++) {
  var li = document.createElement('li');
  li.innerHTML = "Me llamo <em>"+ integrantes[i].nombre + "</em> , gaste: "+ integrantes[i].gasto;
  li.setAttribute('title',li.innerHTML);
  caja_ul.append(li);
}

var parrafoSuma = document.createElement('p');
parrafoSuma.innerText = "La familia gasto un total de "+ suma;
body.append(parrafoSuma);

var butom =  document.createElement('button');
butom.innerText = "¿Nos pasamos del presupuesto?";
butom.onclick = function(){
  var alert = document.createElement('p');
  if (suma >1200) {
    alert.innerText = "El presupuesto diario fue superado ";
    alert.style.color = "red";
  }else {
    alert.innerText = "Aun podemos gastar "+(1200-suma);
    alert.style.color = "blue";
  }
  body.append(alert);
};
body.append(butom);



/*
    Generar otro <button> que al ser clicado, asigne si no existe y elimine si existe, la clase dark-theme al <body>. Crear un css que defina todo el set de estilos para dicha clase.*/
    var butom_dark =  document.createElement('button');
    butom_dark.innerText = "Modifica el body";
    butom_dark.onclick = function(){
      body.classList.toggle('dark-theme');
      /*
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
      }else {
        body.classList.add('dark-theme');
      }*/
    };
    body.append(butom_dark);

/**/
