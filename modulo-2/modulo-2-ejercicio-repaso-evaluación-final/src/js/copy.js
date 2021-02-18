// 'use strict';
// const palettesContainer =document.querySelector('.js-palettes-container');

// let palettes = [];

// // api
// function calltoApi (){
// fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
// .then(response => response.json())
// .then(data =>  {
//   palettes = data.palettes;  
//   console.log(data.palettes)
//   renderPalettes(); 
// });
// }
// let colors = palette.colors;
// // paint palettes
// function renderPalettes(){
// let htmlCode ='';
// for (const palette of palettes) {
//     console.log(palette.name);
//     htmlCode += '<li class="palette">';
//     htmlCode += `<h2 class="palette__title">${palette.name}</h2>`;
//     htmlCode += '<div class="palette__colors"></div>';
//     for (const color of colors) {
//         htmlCode += `<div class="palette__color" style="background-color: ${color}"></div`> 
        
//     }
//     palettesContainer.innerHTML =htmlCode;
//     }       
// }
