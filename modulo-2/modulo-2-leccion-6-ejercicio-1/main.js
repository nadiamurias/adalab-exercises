
'use strict';

// ejercicio 1
const adalaber1 = {
    name : 'Susana',
    age : 34,
    job : 'periodista'
};
console.log('Hola me llamo ' + (adalaber1.name), 'tengo ' + (adalaber1.age), 'años', 'y soy ' + (adalaber1.job));

const adalaber2 = {
    name : 'Rocío',
    age : 25,
    job : 'actriz'
};
console.log('Hola me llamo ' + (adalaber2.name), 'tengo ' + (adalaber2.age), 'años', 'y soy ' + (adalaber2.job));

// ejercicio 2

const adalaber3 = {}
adalaber3.name = 'Susana',
adalaber3.age = 34,
adalaber3.job = 'periodista',
adalaber3.message = run => `Estoy corriendo`;
adalaber3.distance = 50,
adalaber3.newMessage = runmarathon => `Estoy corriendo una maratón de ${adalaber3.distance} kilómetros`;

console.log(adalaber3.message());
console.log(adalaber3.newMessage());

// = ejecución de Iván del ejercicio 2

adalaber1.run = () => {
    console.log("Estoy corriendo");
}
adalaber1.run();

adalaber1.runMarathon = (distance) => {
    console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
}
adalaber1.runMarathon(50);

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
