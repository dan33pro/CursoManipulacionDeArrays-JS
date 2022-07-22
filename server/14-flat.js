//              .flat()
// Este método nos permite aplanar un array
// con arrays dentro hasta el nivel que 
// consideremos necesario.

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// De forma tradicional para aplanar una matriz
// lo haríamos de la siguiente forma
const newArray = [];
for ( let i = 0; i < matriz.length; i++ ) {
    for ( let j = 0; j < matriz[i].length; j++ ) {
        newArray.push(matriz[i][j]);
    }
}
console.log('for: ', newArray);

// Con Flat sería
const rtp = matriz.flat();
console.log('flat: ', rtp);

// Sí quisiéramos hacer un .flat sin usarlo, sería
// usando recursividad.
function myFlat(array, rtp = []) {
    if ( Array.isArray(array) ) {
        array.forEach( element => {
            myFlat(element, rtp);
        });
    } else {
        rtp.push(array);
    }
    return rtp;
}

const ejemplo = [
    [1,2,[1,2,3]],
    [4,5,[4,5,[4,5,6]]],
    [7,8,[7,8,[7,8,[7,8,9]]]]
];
const myRtp = myFlat(ejemplo);
console.log('Recursión: ', myRtp);

// Una forma curiosa de hacerlo es, con .join(), .split() y .map()
const myRpt2 = ejemplo.join(",").split(",").map((matrixItem) => +matrixItem);
console.log(myRpt2);
