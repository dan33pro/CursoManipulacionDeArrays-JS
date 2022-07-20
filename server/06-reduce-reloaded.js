//              .reduce() - reloaded
// Este método se puede aplicar de diferentes formas
// por ejemplo, antes hablábamos de un acumulador, pero
// este no tiene que estar rígido a una constante, en este caso 
// contamos el número de veces que esta un elemento, siendo el 
// acumulador un objeto.

const items = [1,3,2,3,2,3,1,3];

const numberForEach = (array) => array.reduce( (objeto, item) => {
    if (!objeto[item]) {
        objeto[item] = 1;
    } else {
        objeto[item]++;
    }
    return objeto;
}, {} );

console.log("Cunatos veces está un múmero ", numberForEach(items));

// Ahora qué tal si queremos esto pero por 
// rangos, con filter sería algo así
// 1-5, 6-8, 9-10
const numbers = [1,8,5,4,7,10,9,2,1,4,6,7,9,10];
const numForRange = {
                        "range 1-5": numbers.filter(item => (1 <= item && item <= 5)).length,
                        "range 6-8": numbers.filter(item => (6 <= item && item <= 8)).length,
                        "range 9-10": numbers.filter(item => (9 <= item && item <= 10)).length,
                    };
console.log('Números por rango con filter:\n', numForRange);

// Ahora esto mismo con reduce y map sería
const numForRange2 = numberForEach(numbers.map(item => {
    if (1 <= item && item <= 5) return "range 1-5";
    else if (6 <= item && item <= 8) return "range 6-8";
    else if (9 <= item && item <= 10) return "range 9-10";
    else return "número fuera de rango";
}));
console.log('Números por rango con .map() y .reduce():\n', numForRange2);

// Bajo la misma lógica podemos mirar cuantos jugadores hay
// de un mismo nivel, para esto usamos un array con objetos
const data =  [
    {
        name: "Daniel",
        level: "hight",
    },
    {
        name: "Juan",
        level: "low",
    },
    {
        name: "Sara",
        level: "medium",
    },
    {
        name: "Esteban",
        level: "low",
    },
    {
        name: "Nicolle",
        level: "medium",
    },
    {
        name: "Sol",
        level: "low",
    },
];

// Si quisiéramos volver a hacer el método quedaría así
console.log("Jugadores por nivel")
const numForEachLevel = (array) => array.reduce( (objeto, jugador) => {
    if(!objeto[jugador.level]) {
        objeto[jugador.level] = 1;
    } else {
        objeto[jugador.level]++;
    }
    return objeto;
}, {});
console.log(numForEachLevel(data));

// Pero no es necesario, podemos usar el método que ya esta 
// hecho y transformar el array con .map()
const result = numberForEach(data.map( item => item.level ));
console.log(result);