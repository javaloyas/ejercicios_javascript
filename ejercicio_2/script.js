//ejercicio_2
// ejercicio_2/script.js

// 2.1 Destructuring de objeto
const game = { 
  title: 'The last us 2', 
  gender: ['action', 'zombie', 'survival'], 
  year: 2020 
};

// Extraemos propiedades del objeto con destructuring
const { title, gender, year } = game;
console.log(title);   // "The last us 2"
console.log(gender);  // ['action', 'zombie', 'survival']
console.log(year);    // 2020


// 2.2 Destructuring de array
const fruits = ['Banana', 'Strawberry', 'Orange'];

// Extraemos los tres elementos en variables separadas
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);  // "Banana"
console.log(fruit2);  // "Strawberry"
console.log(fruit3);  // "Orange"


// 2.3 Destructuring del return de una función
const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' };
};

// Igualamos directamente con destructuring
const { name, race } = animalFunction();
console.log(name);  // "Bengal Tiger"
console.log(race);  // "Tiger"
// 2.4 Destructuring con objeto y array dentro

const car = { 
  name: 'Mazda 6', 
  itv: [2015, 2011, 2020] 
};

// Destructuring del objeto
const { name: carName, itv } = car;
console.log(carName); // "Mazda 6"
console.log(itv);     // [2015, 2011, 2020]

// Destructuring del array itv
const [year1, year2, year3] = itv;
console.log(year1); // 2015
console.log(year2); // 2011
console.log(year3); // 2020
