// Factorial calculation
var factorial = prompt("Ingrese el número para el factorial");
var result=1;
if (factorial === null) {
    alert("No se colocó ningún valor");
} else {
    var factorial = parseInt(factorial);
}

if (isNaN(factorial)) {
    alert("El valor ingresado no es un número, ingrese un valor numérico");
} else if (factorial < 0) {
    alert("El factorial no puede realizar su proceso con números negativos");
} else {
    for (var i = 1; i <= factorial; i++) {
        document.write("x"+i+"<br>")
        result *= i; // Calculate factorial
    }
    alert("Su factorial es " + result);
}



