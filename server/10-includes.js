//              .includes()
// Este método nos permite saber si hay un elemento dentro de
// nuestros Arrays o Strings, y a diferencia de los otros
// métodos este no recibe una arrow function, sino que solo
// necesita el valor que se desea saber si esta.

const pets = ['cat', 'dog', 'bat'];

// De forma tradicional para Arrays
let include1 = false;
for ( pet of pets ) {
    if ( pet === 'dog') {
        include1 = true;
        break;
    }
}
console.log('for: ', include1);

// Ahora si queremos lo mismo pero con includes
let include2 = search => pets.includes(search);
console.log('includes: ', include2('dog'));