//          métodos que son mutables
// Solo se trabajó algunos de los que son conocidos
// puesto que la mayoría ya se han trabajado en otros 
// cursos

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

const myProducts = [];

function imprimir() {
    console.log('Products', products);
    console.log('Myproducts', myProducts);
    console.log('-'.repeat(10));
}

imprimir();

const searchProduct = (query) => products.findIndex(product => product.id === query);
let myProductIndex = searchProduct('🍔');
if (myProductIndex != -1) {
    // Empuja un elemento al array
    myProducts.push(products[myProductIndex]);
    // Remueve un elemento del array
    products.splice(myProductIndex, 1);
}

imprimir();

// Update
const productsV2 = [
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

const hamburger = {
    id: '🍔',
    changes: {
        price: 200,
        description: 'delicioso',
    }
}

const searchProductUpdate = (update) => productsV2.findIndex(item => item.id === update.id);
const myIndexUpdate = searchProductUpdate(hamburger);
productsV2[myIndexUpdate] = {
    ...productsV2[myIndexUpdate],
    ...hamburger.changes,
}

console.log('products V2', productsV2);