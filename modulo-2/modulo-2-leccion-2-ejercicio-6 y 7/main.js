'use strict';

//Hola Adalaber - ejercicio 6

const pairName = 'Sara';

const title  = document.querySelector('.main__title');

title.innerHTML = 'Hola' + pairName + ',' + 'encantada de conocerte.';


// ejercicio 7 - escribir con interpolación de cadenas
title.innerHTML = `Hola ${pairName}, encantada de conocerte.`;


