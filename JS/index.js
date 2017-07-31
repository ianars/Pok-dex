'use strict';
var bigMac = document.getElementById("btn-bigMac");
var btnNavShow = document.getElementById("btn-navShow");

bigMac.addEventListener("click", navMobile);
function navMobile() {
  btnNavShow.classList.toggle("listShow");
}

var navMenu = document.querySelectorAll(".nav-mobile a");
for (var i = 0; i < navMenu.length; i++) {
  navMenu[i].addEventListener("click", navMobile);
}

// var pokemonName = document.getElementById('name');
// var picture = document.getElementById('picture');
// var num = document.getElementById('num');
// var type= document.getElementById('type');

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
    container.innerHTML += '<div><a><img src="' + data.sprites.front_default +'"></a><h2>Nombre:&nbsp' + data.name + '</h2><h4>Número:&nbsp' + data.id +'</h4></div>';
    // container.innerHTML += '<h2>Nombre:&nbsp' + data.name + '</h2><h4>Número:&nbsp' + data.id +'</h4>';
    var types = data.types;
    if(types.length === 1){
      container.innerHTML += '<h4>Tipo:&nbsp' + types[0].type.name +'</h4>';
    } else {
      container.innerHTML += '<h4>Tipo:&nbsp' + types[0].type.name + '&nbsp/&nbsp' + types[1].type.name +'</h4>';
    }
  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
}
for (var i = 0; i < 50; i++) {
  requestInfo(i);
}
var moreData = document.querySelector('.more-data a');
var modal = document.querySelector('.modal');
var button = document.querySelector('.btn-close');

moreData.addEventListener ('click', showModal);
function showModal() {
  modal.classList.add('modal-show');
}

button.addEventListener ('click', closeModal);
function closeModal() {
  modal.classList.remove('modal-show');
}
