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
/*De igual manera, crearemos un párrafo <p>, con el texto "Tareas completadas: 0".
Una vez con los <li> en nuestro documento, vamos a permitir que cada uno de ellos pueda ser clickeado y que al ser clickeado, el mismo desaparezca después de medio segundo. Así mismo, en el párrafo que dice "Tareas completadas: 0" el número 0 deberá aumentar en 1 por cada tarea eliminada.

Al momento en que todas las tareas se hayan completado se deberá mostrar un texto llamativo que diga: "¡Felicitaciones, estás al día con tus tareas!". Y un contador numérico que vaya desde 5 hasta 0.

Finalmente cuando el contador llegue a 0, llevaremos al visitante al sitio web de Netflix.

 Ahora bien, después del proceso de solicitud de tareas, se debe setear un timer que permita preguntarle al usuario por medio de un alerta, tras 5 segundos de inactividad, "Ey ¿Estás ahí?". Tener en cuenta que si el usuario está activo dentro del documento dicho timer se debe limpiar.*/

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
