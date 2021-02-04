
'use strict';

// // parte 1 ejercicio 1
//  const movies = ['tomates verdes fritos', 'Armagedon', 'Moulin Rouge'
//  movies[3] = 'Titanic';
//  movies[3] = 'Diario de Noa';

// console.log(movies);

// parte 2 ejercicio 1

function workWithMovies (){
const movies = ['tomates verdes fritos', 'Armagedon', 'Moulin Rouge'];
movies[3] = 'Titanic';
movies[3] = 'Diario de Noa';
console.log('llega?');
return movies;
}
console.log(workWithMovies());

// ejercicio 2

// for (let i = 1; i < 11; i++){
//     console.log('Voy por la vuelta ' +i);
// }

// ejericio 3
 let acc = 0;
 for (let i = 0; i < 10; i++){
     acc += 2
console.log('El resultado es: ' + acc)
 }

 // ejercicio 4
 let year = 2017;
 for (let i = 0; 1 < 15; i++){
     year += 3
     console.log ('En', + year, 'se producira el eclipse');
 }