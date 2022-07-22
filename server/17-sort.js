//              .sort()
// Este método nos permite ordenar nuestros arrays
// por defecto según el código ascci, y si le enviamos 
// una arrow function, debes tener en cuenta lo siguiente

//      ¿Por qué a - b o b - a?
// La función que le enviamos a sort es la función compareFn donde:
//  -   Si compareFn(a, b) devuelve un valor mayor que 0, ordena b antes a.
//  -   Si compareFn(a, b) devuelve un valor menor que 0, ordena a antes b.
//  -   Si compareFn(a, b) devuelve 0 a y b se consideran iguales.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log('sort months', months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log('sort default numbers', numbers);
numbers.sort((a,b) => a - b);
console.log('sort menor a mayor numbers', numbers);
numbers.sort((a,b) => b - a);
console.log('sort mayor a menor', numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();
// Antes era necesario comparar con base en
// un idioma por defecto.
//
//          words.sort((a,b) => a.localeCompare(b))
console.log('sort words', words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b) => b.total - a.total);
console.log('sort ordrs', orders);