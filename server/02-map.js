const letras = ["a", "b", "c", "d"];

//      Forma tradicional
// En este caso no hay problema porque los datos
// que tenemos dentro del array son inmutables
const newArray1 = [];
for ( letra of letras ) {
    newArray1.push(letra + '++');
}

//      Con map
// .map es inmutable te retorna un array
// independiente del array original, y como ya
// sabes hace transformaciones.
const newArray2 = letras.map(letra => letra + '--');

console.log(letras);
console.log(newArray1);
console.log(newArray2);

const nums = [2, 4, 5, 6];
function solution(array) {
   const result = array.map(num => num * 2);
   console.log(result);
}; 
solution(nums);