var cantTareas = prompt("Ingrese la cantidad de tareas");
  while (isNaN(cantTareas) || cantTareas < 3) {
    alert("nesecito un numero mayor a 2")
    cantTareas = prompt("Decime la cantidad de integrantes de tu familia");
  }
  //confirm si esta seguro
var body = document.querySelector('body');

var titulo = document.createElement('h2');
titulo.innerText = "To Do List - Cantidad total: "+cantTareas;
body.append(titulo);

var ul = document.createElement('ul');
body.append(ul);


for (var i = 0; i < cantTareas; i++) {
  var nombre = prompt("Nombre de la tarea numero: "+(i+1));
  while (!isNaN(nombre)) {
    alert("esta vacio o nesecito un string");
    nombre = prompt("Nombre de la tarea numero: "+(i+1));
  }
  var li = document.createElement('li');
  li.innerText = nombre;

  ul.append(li);
}

var contadorTareas = 0;
var parrafo = document.createElement('p');
parrafo.innerText = "Tareas completadas: "+contadorTareas;
body.append(parrafo);

var losLi = document.querySelectorAll('li');
losLi.forEach(function(li){

  li.onclick = function(){
      var contadorEliminar = setTimeout(function(){
        li.style.display = "none";
      },500);
      contadorTareas++;
      var newParrafo = document.querySelector('p');
      newParrafo.innerText = "Tareas completadas: "+contadorTareas;

      console.log(contadorTareas);
      if(contadorTareas == 3) {
        var felicidad = document.createElement('p');
        felicidad.innerText = "¡Felicitaciones, estás al día con tus tareas!";
        felicidad.style.color = "green";
        body.append(felicidad);

        var contador = 5;
        var numero = document.createElement('p');
        numero.style.textAlign = "center";
        numero.innerText = contador;
        numero.style.fontSize = "50px";
        body.append(numero);
        var decremento = setInterval(decrecer,1000);
        function decrecer(){
          contador--;
          numero.innerText = contador;
          if (contador==0) {
            clearInterval(decremento);
            location.href ='https://netflix.com' ;
          }
        }

      }
  };
});
/*NO LE gustaa el forrr
for (var i = 0; i < losLi.length; i++) {
    losLi[i].onclick = function(){
    losLi[i].style.display = "none";
   contadorTareas++;
    var newParrafo = document.querySelector('p');
    newParrafo.innerText = "Tareas completadas: "+contadorTareas;
  };
}*/

var tiempoInacti = 5;
var alertaInact = setInterval(alertarInactividad,1000);
function alertarInactividad(){
  console.log(tiempoInacti);
   tiempoInacti--;
   if (tiempoInacti==0) {
    alert("Ey ¿Estás ahí?");
    tiempoInacti=5;
   }
}
body.onmousemove = function(){
   tiempoInacti = 5;
   console.log(tiempoInacti);
};
