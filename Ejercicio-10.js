const estudiantes2 = [
    {
        id: 1,
        nombre: "Ana",
        nota: 4.5,
        edad: 20
    },
    {
        id: 2,
        nombre: "Luis",
        nota: 3.8,
        edad: 18
    },
    {
        id: 3,
        nombre: "Carlos",
        nota: 4.9,
        edad: 22
    },
    {
        id: 4,
        nombre: "Laura",
        nota: 2.9,
        edad: 19
    }
];

const aprobados = estudiantes2.filter(estudiante => estudiante.nota >= 3.0);

console.log("Estudiantes aprobados:", aprobados);


const mayoresEdad = estudiantes2.filter(estudiante => estudiante.edad >= 18);

console.log("Mayores de edad:", mayoresEdad);


const nombres = estudiantes2.map(estudiante => estudiante.nombre);

console.log("Nombres:", nombres);


const estudianteId3 = estudiantes2.find(estudiante => estudiante.id === 3);

console.log("Estudiante con ID 3:", estudianteId3);


const sumaNotas = estudiantes2.reduce((total, estudiante) => {
    return total + estudiante.nota;
}, 0);

const promedio = sumaNotas / estudiantes2.length;

console.log("Promedio:", promedio);


const estudianteNotaAlta = estudiantes2.reduce((mayor, estudiante) => {
    return estudiante.nota > mayor.nota ? estudiante : mayor;
});

console.log("Estudiante con nota más alta:", estudianteNotaAlta);


const estudiantesEstado = estudiantes2.map(estudiante => ({
    ...estudiante,
    estado: estudiante.nota >= 3.0 ? "Aprobó" : "Reprobó"
}));

console.log("Estudiantes con estado:", estudiantesEstado);


const copiaEstudiantes = [...estudiantes2];

console.log("Copia del arreglo:", copiaEstudiantes);