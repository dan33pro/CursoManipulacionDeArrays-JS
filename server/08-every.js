//              .every()
// Esta es la contraparte de .some() aquí se evalúa
// si todos los elementos cumplen con una condición
// y retorna un boolean dependiendo del caso.

const numbers = [1,30,39,29,10,13];

// Sí queremos saber sí todos los números son
// menores o iguales a 40

// Antes con un for
let rpt = true;
for (num of numbers) {
    if (num > 40) {
        rpt = false;
    }
}
console.log('for:', rpt);

// Ahora con .every()
const rpt2 = numbers.every( num => num <= 40);
console.log('rpt2:', rpt2);


// De la misma forma si todos los miembros del
// equipo son menores o de 15 años de edad
const team = [
    {
        name: "Nico",
        age: 12,
    },
    {
        name: "Andy",
        age: 8,
    },
    {
        name: "Sol",
        age: 2,
    },
    {
        name: "Santi",
        age: 18,
    }
];

const menoresDe16 = team.every( person => person.age <= 15);
console.log('Son todos menores de 16: ', menoresDe16, team);