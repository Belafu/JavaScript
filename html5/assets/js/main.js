var titulo = document.getElementById('titular');
titulo.style.display ="none";

var imagen = document.querySelector('img');
imagen.style.filter = "grayscale(100%)";

var subtitulos = document.querySelectorAll('h2');
for (var variable of subtitulos) {
  variable.style.color = "rgb(255, 0, 0)";
}

var iconos = document.querySelectorAll('.icon');
for (var variable of iconos) {
  variable.style.color = "rgb(41, 251, 6)";
}

var copyright = document.getElementById('copyright');
console.log(copyright);
console.log(copyright.attributes.length);
/*
Nos informaron que el form no estaría funcionando, nos comentaron si por Javascript podíamos consultar si tenía el atributo action. Hacer esto y mostrar el resultado de dicha consulta en consola.
Nos comentan que el programador se confundió y en vez de agregar el atributo action, agregó un atributo erroneo (url), nos piden borrarlo y agregar la url en el atributo action, todo con Javascript.*/
var facebook = document.querySelector('.fa-facebook').getAttribute("href");
console.log(facebook);

var twitter = document.querySelector('.fa-twitter').getAttribute("href");
console.log(twitter);

document.querySelector('.fa-youtube').setAttribute("href", "https://www.youtube.com/channel/UCKkPOtW8gQPgIUaxF4Og7PA");

var form =  document.querySelector('form');
console.log(form.getAttribute("action"));//no hay BOTA NULL
console.log(form.hasAttribute("action"));//Lo mismo pregunta si existe el atributo action//ENTONCES BOTA FALSE

var url = form.getAttribute("url");//saco el valor del atributo url
form.removeAttribute("url"); //removemos el atributo url
form.setAttribute("action",url);//agregamos el atributo action con su valor




/**/
