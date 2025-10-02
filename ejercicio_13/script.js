// Reutilizamos la función del ejercicio 12
function findArrayIndex(array, text) {
  return array.indexOf(text);
}

// Nueva función removeItem
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// Ejemplo de uso
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan"
];

console.log("Original:", mainCharacters);

console.log("Borrar Han Solo:", removeItem(mainCharacters, "Han Solo"));

console.log("Borrar Anakin:", removeItem(mainCharacters, "Anakin"));

console.log("Borrar Yoda (no existe):", removeItem(mainCharacters, "Yoda"));
