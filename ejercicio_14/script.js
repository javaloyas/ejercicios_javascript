// 14. Función rollDice
function rollDice(faces) {
  // Genera un número entre 1 y "faces"
  return Math.floor(Math.random() * faces) + 1;
}

// Ejemplos de uso:
console.log("Dado de 6 caras:", rollDice(6));   // número aleatorio del 1 al 6
console.log("Dado de 10 caras:", rollDice(10)); // número aleatorio del 1 al 10
console.log("Dado de 20 caras:", rollDice(20)); // número aleatorio del 1 al 20
