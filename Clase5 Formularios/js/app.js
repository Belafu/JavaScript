var formulario = document.querySelector(".contact-form");
var elemFormulario = formulario.elements;   //HTML COLECTION
var arrayImputs = Array.from(elemFormulario) ;//Array de inputs
arrayImputs.pop();
//Hay campos vacios en alguno de los campos:
formulario.onsubmit = function(event){
  arrayImputs.forEach(function(elem){
    if (elem.value == "") {
      event.preventDefault();//evitamos que se envie el formulario
    }
  });
};

arrayImputs.forEach(function(elem){
  elem.addEventListener("blur",function() {
    if (this.value == "") {
      this.classList.add("is-invalid");
    }
  }) ;
});

/*Correo electrónico: deberá validar que el texto ingresadocoincida con un formato de email valido.ii.Teléfono de contacto: deberá validar que el texto ingresado nocontenga caracteres alfabéticos, sólo números.iii.Contraseña y repetir contraseña: deberá validarse que los doscampos contengan exactamente el mismo texto. Yadicionalmente la contraseña no podrá ser inferior a 4caracteres*/
var mensajesCorrecion = document.querySelectorAll(".invalid-feedback");
console.log(mensajesCorrecion);
var inputEmail = document.querySelector("[name=email]");
//no lo separes con espacios dejalo como estta el regex
var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
inputEmail.onblur = function() {
  if (!emailRegex.test(inputEmail.value)) {
      mensajesCorrecion[1].innerText = "formato de email no valido";
  }else {
      mensajesCorrecion[1].innerText = "";
  }
}

var inputTelefono = document.querySelector("[name=phone]");
var numeroRegex = /^([0-9])*$/;
console.log(numeroRegex.test(12));
console.log(numeroRegex.test("ahvf"));

inputTelefono.onblur = function() {
  console.log(inputTelefono.value);
  console.log("entro");
  if (!numeroRegex.test(inputTelefono.value)) {
      mensajesCorrecion[2].innerText = "Solo numeros";
  }else {
    mensajesCorrecion[2].innerText = " ";
    //  inputTelefono.classList.remove("is-invalid");

  }
}

var inputContra = document.querySelector("[name=password]");
inputContra.onblur = function() {
  if (inputContra.value.length < 4) {
      mensajesCorrecion[3].innerText = "Minimo 4 caracteres";
  }else {
      mensajesCorrecion[3].innerText = "";
  }
}

var inputRepetirContra = document.querySelector("[name=rePassword]");
inputRepetirContra.onblur = function() {
  if (inputRepetirContra.value != inputContra.value) {
      mensajesCorrecion[4].innerText = "No coinciden las contraseñas";
  }
}
