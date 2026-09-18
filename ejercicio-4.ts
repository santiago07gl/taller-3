interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
}

let empleado1: Empleado = {
    nombre: "Santiago",
    cargo: "programador",
    salario: 10000000
}

let empleado2: Empleado = {
    nombre: "Laura",
    cargo: "Tatuadora",
    salario: 2000000
}

console.log(empleado1);
console.log(empleado2);