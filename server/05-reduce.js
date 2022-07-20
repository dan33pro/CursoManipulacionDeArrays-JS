//              .reduce()
// EL método reduce() tiene como objetivo reducir un array
// a una sola expresión no importa de qué forma, trabaja de 
// forma similar a los métodos que hemos venido viendo en este 
// curso, iterando elemento por elemento y haciendo una acción 
// por cada vez.

// A diferencia de los otros métodos reduce(), necesita un
// acumulador, y un parámetro más para definir su estado inicial.

const totals = [1,2,3,4,5];
let sum = 0;

for (num of totals) {
    sum += num;
}
console.log('Sin reduce: ' + sum);

// Como parámetros recibimos la arrow function, y el segundo parámetro es
// el estado inicial del acumulador, en la arrow function es importante que
// el primer valor sea el acumulador.
const rta = totals.reduce( (sum, num) => sum + num, 0 );
console.log('Con reduce', rta);