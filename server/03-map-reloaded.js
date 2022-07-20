//          Map-reloaded
// Cuando trabajamos con map es inmutable, pero que pasa
// cuando dentro de nuestro array tenemos objetos, en este 
// caso sí que hay que tener cuidado con como transformamos
// el array para evitar que acabemos copiando la referencia
// en memoria esto es lo que buscamos solucionar.

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

const rta = orders.map(order => order.total);

const rta2 = orders.map(order => {
    return {
        ...order,
        // Math.trunc vuelve un numero con decimal a entero
        tax: Math.trunc( order.total * .19 ),
    };
});

console.log('Original', orders);
console.log('rta', rta);
console.log('rta2', rta2);