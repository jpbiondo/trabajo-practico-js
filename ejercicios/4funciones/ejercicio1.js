function esPar(num) {
    return num % 2 == 0;
}

function printEsParFunction(num) {
    console.log("El numero", num, "es par:", esPar(num));
}

//Tests de la funcion
let num = 10;
while(num > 0) {
    printEsParFunction(num);
    num--;
}