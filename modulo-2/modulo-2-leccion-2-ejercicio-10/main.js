'use strict';

//Calcular el número total de horas que hemos vivido

const age = document.querySelector('.age');

const ageValue = parseInt(age.innerHTML);
const days = 365;
const hours = 24;

const totalHours = ageValue * days * hours;

console.log(`He vivido ${totalHours} horas`);
