'use strict';

const total = 128;
const people = 9;
const anaExtra = 2;
 const pricePerPerson = (total - anaExtra)/people;
 console.log(`Cada persona tiene que pagar ${pricePerPerson} €`);
 const anaPrice = pricePerPerson + anaExtra;
 console.log(`Ana tiene que pagar ${anaPrice} €`);
