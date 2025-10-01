// ejercicio_5/script.js

// 5.1 Filtrar valores mayores que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages1.filter(age => age > 18);
console.log("5.1:", adults); 
// [22, 24, 55, 65, 21, 90]


// 5.2 Filtrar valores pares
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evens = ages2.filter(age => age % 2 === 0);
console.log("5.2:", evens); 
// [22, 14, 24, 12, 90]


// 5.3 Filtrar streamers que juegan "League of Legends"
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const lolPlayers = streamers.filter(s => s.gameMorePlayed === 'League of Legends');
console.log("5.3:", lolPlayers); 
/*
[
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }
]
*/
// ejercicio_5/script.js  (añadir al final)

// 5.4 Filtrar streamers cuyo name incluye la letra "u"
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const nameWithU = streamers1.filter(s => s.name.includes('u'));
console.log("5.4:", nameWithU);
/*
[
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
*/


// 5.5 Filtrar streamers cuyo gameMorePlayed incluye "Legends"
// y poner gameMorePlayed en MAYÚSCULAS si age > 35
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const legendsPlayers = streamers2.filter(s => s.gameMorePlayed.includes('Legends'))
  .map(s => {
    if (s.age > 35) {
      return { ...s, gameMorePlayed: s.gameMorePlayed.toUpperCase() };
    }
    return s;
  });

console.log("5.5:", legendsPlayers);
/*
[
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'LEAGUE OF LEGENDS' }
]
*/
