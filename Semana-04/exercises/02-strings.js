console.log('--EXERCISE 2: STRINGS');
//Crear una variable de tipo string con al menos 10 caracteres y
//convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('-Exercise 2.a:');
var stringA = 'este string tiene al menos 10 caracteres';
console.log(stringA.toLocaleUpperCase());
// Crear una variable de tipo string con al menos 10 caracteres y
// generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable
// (utilizar substring).
console.log('-Exercise 2.b:');
var resultEx02B = stringA.substring(0,5);
console.log(resultEx02B);
// Crear una variable de tipo string con al menos 10 caracteres y
// generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).
console.log('-Exercise 2.c:');
var stringsAmount = stringA.length;
var stringsAmountLessThree = stringsAmount - 3;
var resultEx02C = stringA.substring(stringsAmountLessThree, stringsAmount);
console.log(resultEx02C);
// Crear una variable de tipo string con al menos 10 caracteres y
// generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
// Guardar el resultado en una nueva variable
// (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.d:');
var resultEx02D = stringA.substring(0,1).toUpperCase() + stringA.substring(1,stringA.length).toLowerCase();
console.log(resultEx02D);
// Crear una variable de tipo string con al menos 10 caracteres y
// algún espacio en blanco. Encontrar la posición del primer espacio en blanco y
// guardarla en una variable (utilizar indexOf).
console.log('-Exercise 2.e:');
var resultEx02E = stringA.substring(stringA.indexOf(' '),(stringA.indexOf(' ')+1));
console.log('-'+resultEx02E+'-');
// Crear una variable de tipo string con al menos 2 palabras largas
// (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga
//  la primera letra de ambas palabras en mayúscula y las demás letras en
//  minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.f:');
var longStringA, longStringB;
longStringA = 'palabra largaA';
longStringB = 'palabra largaB';
var indexSpace = longStringA.indexOf(' ');

longStringA = longStringA.substring(0,1).toUpperCase() +
    (longStringA.substring(1,indexSpace)).toLowerCase() +
    (longStringA.substring((indexSpace),(indexSpace+2))).toUpperCase() +
    longStringA.substring(indexSpace+2).toLowerCase();

indexSpace = longStringB.indexOf(' ');

longStringB = longStringB.substring(0,1).toUpperCase() +
    (longStringB.substring(1,indexSpace)).toLowerCase() +
    (longStringB.substring((indexSpace),(indexSpace+2))).toUpperCase() +
    longStringB.substring(indexSpace+2).toLowerCase();

console.log(longStringA+' '+longStringB);




