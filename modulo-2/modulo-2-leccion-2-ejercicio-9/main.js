'use strict';

const textElement = document.querySelector('.text');

const pairName = 'Sara Martinez';
textElement.innerHTML = `El nombre de mi compañera es ${pairName}, y está compuesto por ${pairName.length} caracteres`;