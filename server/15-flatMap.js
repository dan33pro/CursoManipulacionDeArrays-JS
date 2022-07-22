//          flatMap()
// Me parecía confuso al inicio la solución, pero
// no tenía claro que primero flatMap() realiza un 
// map y luego el flat.

const users = [
    { userId: 1, userName: 'Tom', attributes: ['Nice', 'Cute'], },
    { userId: 2, userName: 'Mike', attributes: ['Lovely'], },
    { userId: 4, userName: 'Nico', attributes: ['Nice', 'Cool'], },
];

// Usando flat map por separado
const rpt = users.map( user => user.attributes ).flat();
console.log('map-flat: ', rpt);

// Usando el flatMap()
const rpt2 = users.flatMap( user => user.attributes );
console.log('flatMap: ', rpt2);

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  // Si queremos un array con la fecha de inicio de las
  // citas podemos hacer, Objecy.values trae un array con los array
  // de cada calendario, y flatMap va a transformar el array a un
  // array con los array de cada fecha de inico por calendario y por
  // ultimo lo aplana.
  const startDates1 = Object.values(calendars).flat().map( date => date.startDate );
  const startDates2 = Object.values(calendars).flatMap( calendars => {
    return calendars.map( date => date.startDate);
  });
  console.log(startDates1, startDates2);
