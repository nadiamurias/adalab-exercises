
'use strict'
//ejercicio 1
function multiply(a,b){
    return a * b;
}
console.log ('Esto es la multiplicación', multiply (15, 8));

//ejercicio 2
function media(a, b, c, d){
    return (a + b + c + d)/4;
}
console.log ('Esto es la media', media (10, 8, 30, 25));

//ejercicio 3
function precio(a) {
    return a * 0.21;
}
const precioSinIva = 35;
console.log (`Precio sin IVA:`, precioSinIva, `IVA:`, precio(precioSinIva), `y Total:`, precioSinIva + precio(precioSinIva));