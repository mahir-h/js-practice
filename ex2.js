// Write celsiusToF(c) so it returns the result. Then use it in a loop 
// to print a table for 0, 10, 20, 30 and 40 °C.

function celsiusToF (c){
    return (c * 9/5) + 32;
}

// console.log(celsiusToF(5));

for(let i = 0; i <=40; i+=10){
    console.log(`${i}C is equal to ${celsiusToF(i)}F`);
}