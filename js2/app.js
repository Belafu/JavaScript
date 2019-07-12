console.log("HOla mundo");

var palabra = "QUe hay";
var lista = ["Hla",34];
var bool = false;
console.log(palabra,lista,bool);

var impares =[];
for (var i = 0;i<68; i++) {
  impares.push(2*i+1);
}
console.log(impares);

/*----------Objetos Literales------------------*/
var ironMan = {
  nombre: "Iron Man",
  equipo: "Avengers",
  poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
  energía: 100,
  getPoder: function(pos){
    if (this.poderes[pos] == "Volar") {
      this.energía -= 10;
    }
    if (this.poderes[pos] == "Lanzar misiles") {
      this.energía -= 15;
    }
    if (this.poderes[pos] == "Disparar láser") {
      this.energía -= 25;
    }
    return this.poderes[pos];
  }
};
/*for (var prop in ironMan) {
  console.log(prop + ': ' + ironMan[prop]);
}*/
console.log("ironMan uso: "+ironMan.getPoder(1));
console.log("La energia de ironMan quedo en: "+ironMan["energía"]);

var hulk = {
  nombre: "Hulk",
  equipo: "Avengers",
  poderes: ["Aplastar", "Gritar", "Golpear"],
  energía: 100,
  getPoder: function(pos){
    switch (pos) {
      case 0:  this.energía -= 5;
        break;
      case 1:  this.energía -= 25;
        break;
      case 2:  this.energía -= 10;
        break;
    }
      return this.poderes[pos];
  }
};
var num = Math.floor(Math.random() * 3);
console.log("hulk uso: "+hulk.getPoder(num));
console.log("La energia de hulk quedo en: "+ hulk["energía"]);


var misDatos ={
  nombre: "Pepe",
  apellido: "Junior",
  dni: 123456,
  comidaFavorita: "Pasta",
  edad: 20,
  saludar: function(){
    return "Hola mi nombre es "+ this.nombre+' '+this.apellido + " y tengo "+this.edad +" años";
  }
}
console.log(misDatos.saludar());
for (var prop in misDatos) {
  console.log(prop + ': ' + misDatos[prop]);
}
/*----------DOM-------------*/

var botonDePrueba = document.getElementById('miBoton');
botonDePrueba.onclick = function(){alert("Testeando el click")};


/*SI el script esta al inicio encerrar esto en
window.onload = function(){
--------ACA el codigo ---------------------
}
*/
var titulo = document.getElementById('titulo');
titulo.onclick = function(){alert("Oye oye tranquillo")};
