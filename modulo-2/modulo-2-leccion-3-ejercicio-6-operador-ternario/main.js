'use strict';

let avocados;
const avocadoPrice = 1.5;
let money = 33;


// if...else
if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}
console.log(avocados);

// lo mismo con operador ternario
money >= avocadoPrice ? avocados = money / avocadoPrice : avocados = 0;
console.log(avocados);