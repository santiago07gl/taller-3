class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona {
    carrera: string;

    constructor(nombre: string, edad: number, carrera: string) {
        super(nombre, edad);
        this.carrera = carrera;
    }
}

const estudiante = new Estudiante(
    "Carlos",
    20,
    "Ingeniería en Sistemas"
);

console.log("Nombre:", estudiante.nombre);
console.log("Edad:", estudiante.edad);
console.log("Carrera:", estudiante.carrera);