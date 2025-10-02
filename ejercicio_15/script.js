// 15. Función swap
function swap(array, index1, index2) {
  // Comprobamos que los índices existan en el array
  if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
    console.error("Índices fuera de rango");
    return array;
  }

  // Guardamos el valor temporalmente e intercambiamos
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}

// Ejemplo de uso:
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa"
];

console.log("Array original:", fantasticFour);

console.log("Intercambiamos índice 0 y 2:", swap(fantasticFour, 0, 2));

console.log("Intercambiamos índice 1 y 3:", swap(fantasticFour, 1, 3));
