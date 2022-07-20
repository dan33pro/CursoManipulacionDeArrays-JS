//              .join() y .spli()
// Estos métodos van juntos como opuestos, .join() nos permite
// aplanar un Array en un String separando los elementos por el
// carácter o caracteres que queramos; por otro lado, .split()
// nos permite separar los elementos de un String que estén 
// separados por el carácter o caracteres que queramos en un Array

const elements = ['Fire', 'Air', 'Water'];

// De forma tradicional así haríamos lo que hace un .join()
let rpt ='';
const separator = '--';
for ( let i = 0; i < elements.length; i++ ) {
    if (  i < elements.length - 1 ) {
        rpt += elements[i] + separator;
    } else {
        rpt += elements[i];
    }
    
}
console.log('for:', rpt);

// Así es con él .join()
const rpt2 = elements.join('--');
console.log('Join:', rpt2);

// Y aquí un ejemplo en el que usamos ambos :)
const title = 'Curso de Manipulación de Arrays';
const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(urlFinal);