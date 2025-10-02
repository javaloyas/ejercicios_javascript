// 8.1 Filtrar videojuegos por género RPG y calcular la media de sus scores

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assassins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 },
];

// 1. Filtrar los que tengan RPG en su género
const rpgGames = videogames.filter(game => game.genders.includes('RPG'));

// 2. Calcular la media de los scores
const avgScore = rpgGames.reduce((acc, game) => acc + game.score, 0) / rpgGames.length;

console.log("Videojuegos RPG:", rpgGames);
console.log("Media de puntuación RPG:", avgScore);
