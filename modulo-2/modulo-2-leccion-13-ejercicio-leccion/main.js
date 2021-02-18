"use strict";

// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// let longName;

// for (const name of names) {
//   const nameLength = name.length;
//   if (nameLength > 5 && longName === undefined) {
//     longName = name;
//   }
// }

// console.log(longName);

// // lo mismo con find 

// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// const longName = names.find(name => name.length > 5);

// console.log(longName);

// findIdenx

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const index = names.findIndex(name => name.length > 5);

console.log(index);
