'use strict';
const palettesContainer = document.querySelector('.js-palettes-container'); // traemos el contenedor para incluir el html
const formElement = document.querySelector('.js-form');
const filterInput = document.querySelector('.js-filter');

let palettes = []; // creamos un array vacío para el código que necesitamos
let favorite = [];

//Pedir datos API

function getDataFromApi(){   
fetch ('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
.then(response =>response.json())
.then(data => {
    palettes = data.palettes;
    paintPalettes(); //pintamos los datos tras recibir los datos de la api
    setInLocalStorage(); //mandamos los datos a localStorage
});
}
//local storage 

function setInLocalStorage(){
    const stringPalettes = JSON.stringify(palettes); // convertimos de array a texto 'string' el json
    localStorage.setItem('palettes', stringPalettes);// guardamos en localStorage el array convertido a texto
}
function getFromLocalStorage(){
    const localStoragePalettes = localStorage.getItem('palettes'); //traemos los datos de localStorage
    if (localStoragePalettes === null) { // comprobamos si hay datos, si no hay sale null
        getDataFromApi();
    }
    else {
        const arrayPalettes = JSON.parse(localStoragePalettes); // si tiene datos lo convertimos en array para poder trabajar con ello
        palettes = arrayPalettes;
        paintPalettes(); //pintamos los datos tras recibir los datos del localStorage o de la api
    }
}
// filter

function handleFilter() {
    console.log('filtrando...');
    
    paintPalettes();
  }
  
  filterInput.addEventListener('keyup', handleFilter); // cuando introducimos letras en el buscador se muestran las paletas que coincidan con las búsqueda
  
  // submit form
  
  function handleForm(ev) {
    ev.preventDefault(); //previene el envío del formmulario
  }
  
  formElement.addEventListener('submit', handleForm); 


// Pintar =render

function paintPalettes(){ //vamos a pintar en la página las paletas (sin utilizar el html)
let htmlCode = '';
for (const palette of palettes) { //iteramos el array
  const filterValue = filterInput.value.toLowerCase();
    if (palette.nametoLowerCase().includes(filterInput.value.toLowerCase())){ // ocultar las paletas que no coincidan con la búqueda con la clase 'palette--hidden' // hacemos que reconozca las letras independientemente si se escribe en minúscula o mayúscula
    htmlCode += '<li class="palette">';
    }
    else {
    htmlCode += '<li class="palette palette--hidden">';
    }
      htmlCode += `<h2 class="palette__title">${palette.name}</h2>`;
      htmlCode += `<div class="palette__colors">`;
    for (const color of palette.colors){
          htmlCode += `<div class="palette__color" style=background-color: #${color}></div>`;
      } 
    htmlCode += '</div>';
    htmlCode += '</li>';
    }
    palettesContainer.innerHTML = htmlCode;
    // escuchar el click en las paletas
}

function isValidPalette(palette, filterValue) {
  return palette.name.toLowerCase().includes(filterValue);
}
// start app

getFromLocalStorage();