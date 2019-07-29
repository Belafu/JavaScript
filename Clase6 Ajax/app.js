function cambiarGif() {
  fetch('https://api.giphy.com/v1/gifs/random?api_key=I46HQeTz0TfAuRSlhuIAEDXLuclRFsyb&tag=&rating=G')
  .then(function(response) {
    return response.json()
  })
  .then(function(information) {
    var titulo = information.data.title;
    document.querySelector('.title').innerText = titulo;
    var url_imagen = information.data.image_url ;
    var imagen = document.querySelector('img');
    imagen.setAttribute('src',url_imagen);
  })
  .catch(function(error){
    console.log(error);
  })
}

  cambiarGif();

  var botom = document.querySelector('button');
  botom.onclick = cambiarGif ;

var cant = prompt('cuantos gifts quieres');

fetch('https://api.giphy.com/v1/gifs/trending?api_key=I46HQeTz0TfAuRSlhuIAEDXLuclRFsyb&limit=' + cant +'&rating=G')
.then(function(response) {
  return response.json()
})
.then(function(information) {
  information.data.forEach(function (elem) {
    var li = document.createElement('li');
    li.innerText = elem.title + " | "+elem.images.original.url;
    document.querySelector('ul').append(li);
  });
  console.log(information.data);
})
.catch(function(error){
  console.log(error);
})
