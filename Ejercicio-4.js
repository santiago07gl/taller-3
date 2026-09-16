const estudiante = {
    nombre: "Laura",
    edad: 20,
    carrera: "Ingeniería",
    materias: [
        "Matemáticas",
        "Programación"
    ]
};
estudiante.edad = 25;
console.log(estudiante.edad);
estudiante.materias.push("Bases de Datos");
console.log(estudiante.materias);
console.log(Object.entries(estudiante));