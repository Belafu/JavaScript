/*Utilizando document.getElementById(), ocultar el elemento <h1 id="titular"> al cargar la página.
Utilizando querySelector() hacer que la imagen de la lechuza, una vez cargada la página, se convierta en blanco y negro, podemos utilizar: elemento.style.filter = "grayscale(100%)";
Seleccionar el elemento con id "copyright" y mostrar en consola a dicho elemento.
Utilizando elemento.style, cambiarle el color actual por un rojo al <h2>.
Nos piden cambiar el color a todos los íconos de la página. Recordá que estos tiene la clase “icon”.*/

var titulo = document.getElementById('titular');
titulo.style.display ="none";

var imagen = document.getElementById('lechuza');
imagen.style.filter = "grayscale(100%)";
