console.log('--EXERCISE 6: FUNCTIONS');
// Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable,
// mostrando el valor de dicha variable en la consola del navegador.
console.log('-Exercise 6.a:');
function suma(num1, num2) {
    return (num1 + num2);
}
var resultFunction = suma(5, 6);
console.log(resultFunction);
// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
// de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y
// retornar el valor NaN como resultado.
console.log('-Exercise 6.b:');
function suma(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        alert('One or two parameters are not typeof number');
        return 'NaN';
    } else
    return (num1 + num2);
}
resultFunction = suma(5, 'l');
console.log(resultFunction);
// Aparte, crear una función validate Integer que reciba un número como parámetro y
// devuelva verdadero si es un número entero.
console.log('-Exercise 6.c:');
function validate(numbr) {
    return (Number.isInteger(numbr));
}
// A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y
// que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y
// retornar el número convertido a entero (redondeado).
console.log('-Exercise 6.d:');
function suma(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        alert('One or two parameters are not typeof number');
        return 'NaN';
    } else{
        if (validate(num1) && validate(num2)) {
        } else{
            num1 = Math.round(num1);
            num2 = Math.round(num2);
        }
        return (num1 + num2);
    }
}
console.log(suma(5, 5.55));
// Convertir la validación del ejercicio 6d) en una función separada y
// llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log('-Exercise 6.e:');
function validationDecimals(num1) {
    if (validate(num1)) {
    } else{
        num1 = Math.round(num1);
    }
    return num1;
}
function suma(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        alert('One or two parameters are not typeof number');
        return 'NaN';
    } else{
        num1 = validationDecimals(num1);
        num2 = validationDecimals(num2);
        return (num1 + num2);
    }
}
console.log(suma(6, 6.55));