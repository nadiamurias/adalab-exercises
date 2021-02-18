
'use strict';

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

