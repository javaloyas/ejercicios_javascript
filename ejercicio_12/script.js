// 12 - findArrayIndex
function findArrayIndex(array, text) {
  return array.indexOf(text);
}

// Ejemplo de uso
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"));      // 0
console.log(findArrayIndex(mainCharacters, "Chewbacca")); // 3
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));   // 6
console.log(findArrayIndex(mainCharacters, "Yoda"));      // -1 (no existe)
