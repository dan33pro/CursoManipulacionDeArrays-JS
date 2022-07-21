//              .concat()
// En este caso este método es inmutable, ya sabes 
// con qué condiciones, su objetivo es unir los
// elementos de 2 arrays en uno solo.

let elements = [1,1,2,2];
let othersElements = [3,3,4,4];

// De forma tradicional
const newArray = [];
for (let i = 0; i < elements.length; i++) {
    newArray.push(elements[i]);
}
for (let i = 0; i < othersElements.length; i++) {
    newArray.push(othersElements[i]);
}
console.log('for: ', newArray);

// Con .concat() sería
const newArray2 = elements.concat(othersElements);
console.log('concat: ', newArray2);

// Aunque personalmente prefiero usar el operador de propagación
const newArray3 = [...elements, ...othersElements];
console.log('spreadOperator: ', newArray3);

// Otra forma de hacerlo suponiendo que no importa si modificamos
// el array original sería, donde podríamos sufrir por esto
// tanto en elements como otherElements
let newArray4 = elements;
newArray4.push(othersElements);
console.log('flat mutable', newArray4.flat(2));

// Una cosa a tener en cuenta con el spread operator
// es que también te entrega las propiedades de un objeto, hasta
// aquí bien, pero si le envías un string él te va separar las letras 
// de este en un array
const ejemplo = [...'hola mundo'];
console.log('ejemplo', ejemplo);

