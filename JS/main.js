
'use strict';
var pokemonName = document.getElementById('name');
var picture = document.getElementById('picture');
var num = document.getElementById('num');
var type= document.getElementById('type');



function requestInfo(number) {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + number + '/', true);
  request.addEventListener('load', function(){
    refreshWeb(request);
  });
  request.addEventListener('error', function() {
    console.log('Error al tratar de conectarse con el servidor');
  });
  request.send();
}

    // <p class="">Imagen:</p><img id="picture">
    // <p class="">Nombre:</p><span id="name"></span>
    // <p class="">Número:</p><span id="num"></span>
    // <p class="">Tipo de Pokemon:</p><span id="type"></span>

function refreshWeb(request){
  if(request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var container = document.querySelector('.cards-container');
    container.innerHTML += '<p><img src="' + data.sprites.front_default +'"></p>';
    container.innerHTML += '<p>Nombre:' + data.name +'</p>';
    container.innerHTML += '<p>Número:' + data.id +'</p>';
    var types = data.types;
    if(types.length === 1){
      container.innerHTML += '<p>Tipo:' + types[0].type.name +'</p>';
    } else {
      container.innerHTML += '<p>Tipo:' + types[0].type.name + '/' + types[1].type.name +'</p>';
    }
  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
}
requestInfo(13);
requestInfo(33);
requestInfo(25);
requestInfo(1);
requestInfo(12);
requestInfo(151);

// 1 version. sin terminar
// 'use strict';
//
// var pokemonName = document.getElementById('name');
// var picture = document.getElementById('picture');
// var num = document.getElementById('num');
// var type = document.getElementById('type');
// var request = new XMLHttpRequest();// - es una nueva petición al servidor
//
// function requestInfo() {
//   request.open('GET', 'http://pokeapi.co/api/v2/pokemon/' +
//  true);
//   request.addEventListener('load',refreshWeb);
//   request.addEventListener('error', function(){
//     console.log('Error al tratar de conectarse con el servidor');
//   });
//   request.send();
// }
//
// // responseText - me manda un texto y con JSON.parse lo transformamos en un formato
// // data = es el JSON la info q nos da el servidor. ej: nombre: pikachu;
// function refreshWeb() {
//   if (request.status >= 200 && request.status < 400) {
//     var data = JSON.parse(request.responseText);
//     pokemonName.innerHTML = data.name;
//     picture.src = data.sprite.front_default;
//     num.innerHTML = data.id;
//     type.innerHTML = data.types[0];
//   } else {
//     console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
//   }
// }
// requestInfo();
