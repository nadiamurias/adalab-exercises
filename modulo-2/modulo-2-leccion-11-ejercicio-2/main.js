'use strict';

// api
function callApi (inputValue){
fetch ('https://swapi.dev/api/people/?search=' + inputValue)
.then (response => response.json())
.then (data => {
    paintList(data.results);
});
}

//paint

const listElement = document.querySelector('.js-list');

function paintList (people){
    let htmlCode = '';
    for(const person of people){
    htmlCode += '<li>';
    htmlCode += `<p>Nombre: ${person.name}</p>`;
    htmlCode += `<p>Gender: ${person.gender}</p>`;
    htmlCode += '</li>';
    console.log(person.name);
    }
    listElement.innerHTML = htmlCode;
   
}
// search

const inputElement = document.querySelector('.js-input');
const buttonElement = document.querySelector('.js-button');

function handleSearch (){
 callApi(inputElement.value)
}
buttonElement.addEventListener('click', handleSearch)
