//          .filter()
// Este método nos permite crear un array a partir de otro
// y que sea inmutable, es decir independientes, pero nos
// permite filtrar con base en una condición y nos creara
// un array solo con los que la cumplan, ya sea:

//      => Un array vacío, cuando ninguno cumple la condición
//      => Un array del mismo tamaño que el original, si todos
//          los elementos cumplen la condición
//      => Un array con solo algunas coincidencias

const words = ['Hola', 'mi', 'nombre', 'es', 'frailejon', 'Hernesto', 'Perez'];

// Antes
const newArray = [];
for ( word of words ) {
    if( word.length >= 6 ) {
        newArray.push(word);
    }
}

// Ahora
const newArray2 = words.filter(word => word.length >= 6);

console.log('Original', words);
console.log('Sin filter', newArray);
console.log('Con filter', newArray2);


// filter nos permite hacer condiciones más complejas ejemplo:

const orders = [
    {
        customerName: 'Lucas',
        total: 89,
        delivered: true,
    },
    {
        customerName: 'Juana',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Simon',
        total: 56,
        delivered: false,
    },
    {
        customerName: 'Sol',
        total: 80,
        delivered: true,
    },
];

const deliveredTrue = orders.filter( order => order.delivered || order.total >= 80 );
console.log('Ordenes entregadas', deliveredTrue);

// Si quisieramos un buscador podria ser
const search = (customerName) => {
    // El método includes ya lo hemos trabajado antes, con arreglos
    // ahora sé que también se puede con cadenas de caracteres :)
    return orders.filter( order => order.customerName.includes(customerName));
}


console.log('search', search('Sim'));

// Eso sí, tratar de que las búsquedas y los filtros sean trabajados por
// el motor de DB si es que estamos usando alguno.