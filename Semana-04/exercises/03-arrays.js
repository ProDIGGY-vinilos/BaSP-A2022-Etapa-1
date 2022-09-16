console.log('--EXERCISE 3: ARRAYS');
// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
// "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('-Exercise 3.a:');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
 "Octubre", "Noviembre", "Diciembre"];
console.log(months[4],' ', months[10]);
// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-Exercise 3.b:');
for (var month of months.sort()) {
    console.log(month);
}
// Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-Exercise 3.c:');
months.unshift('firstMonth');
months.push('lastMonth');
for (var month of months) {
    console.log(month);
}
// Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d:');
months.shift();
months.pop();
for (var month of months) {
    console.log(month);
}
// Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e:');
months.reverse();
for (var month of months) {
    console.log(month);
}
// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('-Exercise 3.f:');
console.log(months.join('-'));
// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('-Exercise 3.g:');
var monthsEx3G = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
 "Octubre", "Noviembre", "Diciembre"];
monthsEx3G = monthsEx3G.slice(4,10);
for (var month of monthsEx3G) {
    console.log(month);
}
