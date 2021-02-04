'use strict';

//conversor de perro a humano

//primer año perro = 15 años humano
// segundo año perro = 9 años humano
// apartir del 3er año perro = 5 años humano

let ageDog = 5;

if (ageDog === 1){
console.log(`Cuando el perro tiene ${ageDog} años perros, tiene ${15} años humanos`)
} 
else if (ageDog === 2){
  console.log(`Cuando el perro tiene ${ageDog} años perros, tiene ${15 + 9} años humanos`)
}
else {
  console.log(`Cuando el perro tiene ${ageDog} años perros, tiene ${15 + 9 + 5* ageDog -2} años humanos`)
}

console.log(ageDog);