
'use strict'


function getEl (a){
 return document.querySelector(a);
}
const btnEl = getEl('.js-text')
const titleValue = parseInt(btnEl.innerHTML)
 console.log(titleValue);

function number (a){
   if ( a % 2 === 0){
       console.log ('Este número es par');
   }
   else {
       console.log('Este número es impar');
   }
   }
   number(titleValue);
