
'use strict';

//ejercicio 2
const inputName= document.querySelector('.js-name');
const greetingElement = document.querySelector('.js-greeting');

const  handleGetMessage = (event) => {
    console.log (event);
    greetingElement.innerHTML = `Hola, ${handleGetMessage.value}!`; //= ${event.target.value}
}
buttonElement.addEventListener('keydown', handleGetMessage);