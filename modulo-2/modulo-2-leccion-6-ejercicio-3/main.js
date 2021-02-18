
'use strict';

// ejercicio 3.1

const adalaber4 = {}
adalaber4.name = 'Susana',
adalaber4.age = 34,
adalaber4.job = 'periodista',
adalaber4.message = run => `Estoy corriendo`;
adalaber4.distance = 50,
adalaber4.newMessage = runmarathon => `Estoy corriendo una maratón de ${adalaber4.distance} kilómetros`;
adalaber4.secondMessage = showBio => `Mi nombre es ${adalaber4.name}, tengo ${adalaber4.age} años y soy ${adalaber4.job}`;

console.log(adalaber4.secondMessage());

// ejercico 3.2
const adalaber5 = {}
adalaber5.name = 'Rocío',
adalaber5.age = 24,
adalaber5.job = 'actriz',
adalaber5.showBio = function () {
    return `Mi nombre es ${adalaber5.name}, tengo ${adalaber5.age} años y soy ${adalaber5.job}`;
}

console.log(adalaber5.showBio());

