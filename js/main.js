// Calculación factorial 
// Vamos a crear una variable con el nombre de factorial que será el número que nos del usuario
var factorial = prompt("Ingrese el número para el factorial");
//La variable resultada almacenara la respuesta que salga del resultado de la factorial
//Se empieza en 1 para que el primer valor que se multiplique siempre sea el 1 y de esta forma no se altere el resultado final de la multiplicación
var result=1;
//Le estamos indicando que si el usuario no coloca ningún valor aparezca una alerta que le indique que no coloco ningún valor
if (factorial === null) {
    alert("No se colocó ningún valor");
//Nosotros al usar el prompt el valor ingresado será una cadena de texto y para realizar la factoría tenemos que trabajar con números, el parseInt transforma la cadena en un valor entero} else {
    var factorial = parseInt(factorial);
}
//Le estamos indicando a través del isNaN que si el valor colocado por el usuario no es número salga el siguiente mensaje
if (isNaN(factorial)) {
    alert("El valor ingresado no es un número, ingrese un valor numérico");
//Le estamos diciendo que si el valor ingresado por el usuario es un valor negativo lo cambie porque la factorial no trabaja con negativos
} else if (factorial < 0) {
    alert("El factorial no puede realizar su proceso con números negativos");
//Una vez pasados todos los if se realizará el procedimiento para sacar la factorial 
//Indicamos que la variable i es igual a 1, que el i puede ser menor o igual al número recogido por el usuario, y que i va a incrementar de 1 en 1
} else {
    for (var i = 1; i <= factorial; i++) {
        //Le indicamos que nos coloque en el documento de la página todos los números usados para realizar la factorial junto a un br para que todo sea ordenado
        document.write("x"+i+"<br>")
        //Es una forma abreviada de escribir result = result * i; y se utiliza para actualizar el valor de result en cada iteración del bucle
        //result *= i; multiplica el valor acumulado de result por cada número entero hasta el numero ingresado por el usuario
        result *= i; 
    }
    alert("Su factorial es " + result);
}



