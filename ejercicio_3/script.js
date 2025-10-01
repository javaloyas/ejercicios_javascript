// ejercicio_3/script.js

// 3.1 Copia de un array con spread
const pointsList = [32, 54, 21, 64, 75, 43];
const copyPoints = [...pointsList];
console.log("3.1:", copyPoints);


// 3.2 Copia de un objeto con spread
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const copyToy = { ...toy };
console.log("3.2:", copyToy);


// 3.3 Unir dos arrays con spread
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];
const mergedPoints = [...pointsList1, ...pointsList2];
console.log("3.3:", mergedPoints);


// 3.4 Fusionar dos objetos con spread
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const mergedToy = { ...toy, ...toyUpdate };
console.log("3.4:", mergedToy);


// 3.5 Copiar un array eliminando posición 2 (índice 2)
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
// opción: usar slice + spread
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];
console.log("3.5:", colorsCopy); // ["rojo", "azul", "verde", "naranja"]
console.log("original:", colors); // se mantiene igual
