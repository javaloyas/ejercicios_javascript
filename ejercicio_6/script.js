// ejercicio_6/script.js

// 6.1 Usar find() para encontrar el número 100
const numbers = [32, 21, 63, 95, 100, 67, 43];
const foundNumber = numbers.find(num => num === 100);
console.log("6.1:", foundNumber); 
// 100


// 6.2 Usar find() para encontrar la película del año 2010
const movies = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
];

const movie2010 = movies.find(movie => movie.date === 2010);
console.log("6.2:", movie2010); 
// { title: 'Origen', stars: 5, date: 2010 }
