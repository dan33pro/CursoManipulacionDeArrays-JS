//              .some()
// Este método nos permite saber si al menos 
// hay un elemento en el array que cumpla con
// cierta condición.

const numbers = [1, 2, 3, 4, 5];

// Antes si queríamos encontrar si al menos un elemento
// cumplía con ciertas condiciones, lo hacíamos iterando
// elemento por elemento.
let par = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        par = true;
        break;
    }
}
console.log('Hay al menos un par:', par, numbers);

// Ahora para conseguir el mismo resultado pasamos
// una arrow function a .some() con el elemento y lo 
// que va a verificar por cada uno, y retornar un boolean
const par2 = numbers.some(num => num % 2 === 0);
console.log('Hay al menos un par:', par2, numbers);

// También podemos trabajar con arrays que contengan 
// objetos, por ejemplo, si queremos saber si al menos
// una orden fue entregada.
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

const deliveredTrue = orders.some(order => order.delivered);
console.log('Se entrego al menos una orden: ', deliveredTrue);

// Otro caso es si quiero agendar una cita y que no se
// me cruce con alguna ya existente

// Una clase cita con hora de inicio y fin, así como un titulo
class Cita {
    constructor({ startDate, endDate, title }) {
        this.#createDate(startDate) != 'undefined'?
        this.startDate = this.#createDate(startDate):
        console.log(new Error('Debe ser una fecha valida'));

        this.#createDate(endDate) != 'undefined'?
        this.endDate = this.#createDate(endDate):
        console.log(new Error('Debe ser una fecha valida'));

        this.title = title;
    }

    #createDate(dateString) {
        let dateArray = dateString.split(",");
        if (dateArray.length === 4 || dateArray.length === 5) {
            let year = dateArray[0];
            let month = dateArray[1];
            let day = dateArray[2];
            let hour = dateArray[3];
            let minute = 0;
            if (dateArray.length === 5) {
                minute = dateArray[4];
            }
            return new Date(year, month, day, hour, minute);
        }
        return undefined;
    } 
}

// Una clase calendario donde tengo mis
// citas programadas
class Calendar {
    constructor(dates = []) {
        if ( Array.isArray(dates) ) {
            let datesValid = dates.filter( cita => cita instanceof Cita );
            this.dates = datesValid;
        } else {
            this.dates = [];
        }
    }

    agragarCita(newCita) {
        if ( newCita instanceof Cita ) {
            if (!this.#isOverlap(newCita)) {
                this.dates.push(newCita)
                console.log('Cita agendada');
            } else {
                console.log('No se puede agendar en este horario');
            }
        } else {
            console.log('Cita no valida');
        }
    }

    #isOverlap(newCita) {
        return this.dates.some( cita => {
            return areIntervalsOverlapping(
                {start: cita.startDate, end: cita.endDate},
                {start: newCita.startDate, end: newCita.endDate},
            );
        });
    }
}

// Las citas con las que quiero iniciar mi calendario
const dates = [];
dates.push(
    new Cita({
        title: 'Cita trabajo', 
        startDate: '2021,1,1,10',
        endDate: '2021,1,1,11',
    }),
    new Cita({
        title: 'Cita con mi jefe',
        startDate: '2021,1,1,15',
        endDate: '2021,1,1,15,30',
    }),
    new Cita({
        title: 'Cena',
        startDate: '2021,1,1,20',
        endDate: '2021,1,1,21',
    }),
    {
        hola: "hola",
    },
);

const myCalendar = new Calendar(dates);

// En este caso estamos haciendo uso de una libreria, que quedo como
// dependencia, y un método que verifica sí se cruzan ciertas horas.
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

// Las ultimas citas que quiero agregar
const newCita1 = new Cita({
    title: 'Reunion Amigos',
    startDate: '2021,1,1,19',
    endDate: '2021,1,20,30',
});

const newCita2 = new Cita({
    title: 'Reunion Amigos',
    startDate: '2021,1,1,19',
    endDate: '2021,1,1,20',
});

myCalendar.agragarCita(newCita1);
myCalendar.agragarCita(newCita2);
console.log(myCalendar.dates);

