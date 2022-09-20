console.log('--EXERCISE 5: FOR');

// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
//  una alerta utilizando cada una de las palabras.
console.log('-Exercise 5.a:');
var fiveWords = ['first', 'second', 'third', 'fourth', 'fifth'];
for (var i of fiveWords) {
    alert(i);
}
// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta
// por cada palabra modificada.
console.log('-Exercise 5.b:');
for (var i of fiveWords) {
    i = i.substring(0,1).toUpperCase() + i.substring(1, i.length).toLowerCase();
    alert(i);
}
// Crear una variable llamada “sentence” que tenga un string vacío,
// luego al array del punto a recorrerlo con un bucle for
// para ir guardando cada palabra dentro de la variable sentence.
// Al final mostrar una única alerta con la cadena completa
console.log('-Exercise 5.c:');
var sentence = '';
for (var i of fiveWords) {
    sentence = sentence +' '+ i;
}
alert(sentence);
// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
//  es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
//  desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
console.log('-Exercise 5.d:');
var emptyArraay = new Array(10);
for (var i = 0; i < emptyArraay.length; i++) {
    emptyArraay[i] = i;
}
console.log(emptyArraay);
