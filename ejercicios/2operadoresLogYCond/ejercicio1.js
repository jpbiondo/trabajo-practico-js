let a = 30;
let b = 20;
let c = 12;

let mayor;
if(a <= b) {
    if(b < c) {
        mayor = c;
    } else {
        mayor = b;
    }
} else {
    if(a < c) {
        mayor = c;
    } else {
        mayor = a;
    }
}

console.log("El mayor de los numeros es: ", mayor);