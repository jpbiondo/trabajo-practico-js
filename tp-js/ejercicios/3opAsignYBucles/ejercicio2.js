let number;

do {
    number = Number(prompt("Ingrese un número mayor a 100"));
} while(number <= 100);

console.log("Ingresaste un número mayor a 100:", number);