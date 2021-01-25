
'use strict'; 

 //ejercicio 1
  const button = document.querySelector('.js-button')
  function showMessage(){
      console.log('Mi primer click, ¡ole yo y la mujer que me parió!');
  }
  button.addEventListener('click', showMessage
  // igual pero con arrow functio
 //  const button = document.querySelector('.js-button');
  button.addEventListener('click', () => console.log('Mi primer click, ¡ole yo y la mujer que me parió!'));
