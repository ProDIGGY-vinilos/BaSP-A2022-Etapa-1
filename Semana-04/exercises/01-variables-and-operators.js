console.log('--EXERCISE 1: VARIABLES AND OPERATORS');
//a Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos
//números en una 3er variable.
console.log('-Exercise 1.a: ');
var numA = 5;
var numB = 7;
var resultEx01A = numA + numB;
console.log(resultEx01A);
//b Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('-Exercise 1.b: ');
var stringA, stringB, resultEx01B;
stringA = 'Esta es una ';
stringB = 'Palabra';
resultEx01B = stringA+stringB;
console.log(resultEx01B);
//c Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
//guardando el resultado de la suma en una 3er variable (utilizar length)
console.log('-Exercise 1.c: ');
var resultEx01C = stringA.length + stringB.length;
console.log(resultEx01C);
