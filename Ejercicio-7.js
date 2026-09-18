const libros = [
    {
        id: 1,
        titulo: "JavaScript",
        disponible: true
    },
    {
        id: 2,
        titulo: "Python",
        disponible: false
    },
    {
        id: 3,
        titulo: "Java",
        disponible: true
    }
];

let encontrarLibro = libros.find(libro => libro.id === 2);
console.log(encontrarLibro);

let libroDisponible = libros.filter(libro => libro.disponible === true);
console.log(libroDisponible);

const titulos = [libros.map(libro => libro.titulo)]
console.log(titulos)
