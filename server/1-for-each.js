const letras = ["a", "b", "c", "d"];

//      Forma tradicional
// Lo puse en una función porque quise jaja
function forEachT1(array) {
    for ( let index = 0; index < array.length; index++ ) {
        const element = array[index];
        console.log(element);
    }
}
console.log("Forma tradicional 1");
forEachT1(letras);

// Otra forma tradicional
function forEachT2(array) {
    for ( element of array ) {
        console.log(element);
    }
}
console.log("Forma tradicional 2");
forEachT2(letras);

//      Mejor forma:
// Nos da la ventaja de pasarle una arrow function con
// lo que queremos hacer por cada iteración, y maneja una
// sintaxis más simple.
console.log("Mejor forma");
letras.forEach( element => console.log(element) );
