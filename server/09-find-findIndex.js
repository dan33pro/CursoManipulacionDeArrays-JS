//              .find() y .findIndex()
// Estos métodos nos permiten hacer una búsqueda en 
// un array, donde nos va a retornar:

//  ------------------------------------------------------------
//  |   método          |   siLoEncuentra   |   siNoLoEncuentra |
//  -------------------------------------------------------------
//  |   .find()         |       elemento    |       undefined   |
//  |   .findIndex()    |       indice      |           -1      |
//  ------------------------------------------------------------

// Solamente van a retornar el valor de la primera
// coincidencia.

const numbers = [1, 30, 49, 29, 10, 13];

// De forma tradicional 
let rpt1;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 30) {
        rpt1 = element;
    }
}
console.log('for: ', rpt1);

// Con .find()
const find = (array, search) => array.find(element => element === search);
console.log('find:', find(numbers, 30));

// Un caso de uso podría ser una búsqueda por id
// recuerda que siempre es mejor dejar las búsquedas
// para el motor de BD si se está usando
const products = [
    {
        name: 'Pizza',
        price: 12,
        id: '🍕',
    },
    {
        name: 'Burger',
        price: 23,
        id: '🍔',
    },
    {
        name: 'Hot dog',
        price: 34,
        id: '🌭',
    },
    {
        name: 'Hot cakes',
        price: 35,
        id: '🥞',
    },
];

const searchProduct = (products, findID) => products.find( product => product.id === findID);
console.log(searchProduct(products, '🍔'));

// Una variante de este método es
const rpt2 = products.findIndex( product => product.id == '🍕');
console.log('La pizza está en: ', rpt2);
