// 7.1 Suma de todas las notas con reduce
const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
];

// 7.1 Sumar todas las notas
const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log("7.1 Total de notas:", totalScore);

// 7.2 Sumar solo las notas de los aprobados (>=5)
const totalApproved = exams.reduce((acc, exam) => {
  return exam.score >= 5 ? acc + exam.score : acc;
}, 0);
console.log("7.2 Total de notas aprobadas:", totalApproved);

// 7.3 Media de todas las notas
const average = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log("7.3 Media de notas:", average);
