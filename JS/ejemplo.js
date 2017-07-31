'use strict';

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

function refreshWeb(request){
  if(request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var container = document.querySelector('.cards-container');
    container.innerHTML += '<a><img src="' + data.sprites.front_default +'"></a><p>Nombre:' + data.name +'</p><p>Número:' + data.id +'</p>';
// container.innerHTML += '<p>Nombre:' + data.name +'</p>';
    // container.innerHTML += '<p>Número:' + data.id +'</p>';
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
for (var i = 0; i < 50; i++) {
  requestInfo(i);
}

// requestInfo(33);
// requestInfo(25);
// requestInfo(1);
// requestInfo(12);
// requestInfo(151);
// for (var i = 0; i < container.length; i++) {
//   ul.innerHTML += '<li>' + container[i].name + '</li>';
// }



// esta version : me aparecen en linea pero sin nombre tipo y número
// function requestInfo(number) {
//   var request = new XMLHttpRequest();
//   request.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + number + '/', true);
//   request.addEventListener('load', function(){
//     refreshWeb(request);
//   });
//   request.addEventListener('error', function() {
//     console.log('Error al tratar de conectarse con el servidor');
//   });
//   request.send();
// }
//
// function refreshWeb(request){
//   if(request.status >= 200 && request.status < 400) {
//     var data = JSON.parse(request.responseText);
//     // var container = document.querySelector('.cards-container');
//     var card = document.querySelector('.card');
//     var info = document.querySelector('.info');
//     var tipo = document.querySelector('.tipo')
//     card.innerHTML += '<a><img src="' + data.sprites.front_default +'"></a>';
//     tipo.innerHTML += '<h2>Nombre:&nbsp' + data.name + '</h2><h4>Número:&nbsp' + data.id +'</h4>';
//     var types = data.types;
//     if(types.length === 1){
//       tipo.innerHTML += '<h4>Tipo:&nbsp' + types[0].type.name +'</h4>';
//     } else {
//       tipo.innerHTML += '<h4>Tipo:&nbsp' + types[0].type.name + '&nbsp/&nbsp' + types[1].type.name +'</h4>';
//     }
//   } else {
//     console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
//   }
// }
// for (var i = 0; i < 50; i++) {
//   requestInfo(i);
// }
