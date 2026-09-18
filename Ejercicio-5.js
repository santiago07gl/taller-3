const empleados = [
    { nombre: "Ana", salario: 3000 },
    { nombre: "Luis", salario: 5000 },
    { nombre: "Pedro", salario: 2500 },
    { nombre: "Sara", salario: 7000 }
];

const  empleados2 = empleados.filter(empleados => empleados.salario >= 4000);

console.log(empleados2);