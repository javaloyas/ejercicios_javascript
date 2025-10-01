// ejercicio_4/script.js

// 4.1 Devuelve un array con los nombres utilizando map()
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const names = users1.map(user => user.name);
console.log("4.1:", names); 
// ["Abel", "Julia", "Pedro", "Amanda"]


// 4.2 Devuelve lista de .name y cambia a "Anacleto" si empieza por 'A'
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const updatedNames = users2.map(user => 
  user.name.startsWith('A') ? 'Anacleto' : user.name
);

console.log("4.2:", updatedNames); 
// ["Anacleto", "Julia", "Pedro", "Anacleto"]
// ejercicio_4/script.js  (añadido al final)

// 4.3 Añadir "(Visitado)" a los nombres si isVisited = true
const cities = [
  { isVisited: true,  name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true,  name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];

const visitedCities = cities.map(city => 
  city.isVisited ? `${city.name} (Visitado)` : city.name
);

console.log("4.3:", visitedCities);
// ["Tokyo (Visitado)", "Madagascar", "Amsterdam (Visitado)", "Seul"]
