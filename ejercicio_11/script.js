// ejercicio_11/script.js

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves:   { format: "mp3", volume: 50 },
      rain:    { format: "ogg", volume: 60 },
      firecamp:{ format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves:  { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train:  { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower:  { format: "mp3", volume: 50 },
      train:   { format: "ogg", volume: 60 },
      firecamp:{ format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves:   { format: "mp3", volume: 67 },
      wind:    { format: "ogg", volume: 35 },
      firecamp:{ format: "mp3", volume: 60 },
    },
  },
];

// Conteo de cuántas veces aparece cada sonido
const soundCount = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    soundCount[sound] = (soundCount[sound] || 0) + 1;
  }
}

console.log("Recuentos:", soundCount);
// Ej: { waves: 3, rain: 1, firecamp: 3, shower: 2, train: 2, wind: 1 }
