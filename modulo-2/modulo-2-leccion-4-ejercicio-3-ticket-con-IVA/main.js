
'use strict'
//ejercicio 3
function precio(a) {
    return a * 0.21;
}
const precioSinIva = 35;
console.log(`Precio sin IVA:`, precioSinIva, `IVA:`, precio(precioSinIva), `y Total:`, precioSinIva + precio(precioSinIva));


