// Lista de películas
const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 110,
    categories: ["comedia", "thriller"],
  }
];

// Array vacío para guardar categorías únicas
const uniqueCategories = [];

// Recorremos las películas
for (const movie of movies) {
  for (const category of movie.categories) {
    // Solo añadimos si no está ya en el array
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
  }
}

// Imprimir resultado
console.log("Categorías únicas:", uniqueCategories);
