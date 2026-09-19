const computador = {
    marca: "Lenovo",
    procesador: "Intel i7",
    ram: 16,
    almacenamiento: 512
};

const {
    marca,
    ram,
    almacenamiento: ssd,
    tarjetaGrafica = "No especificada"
} = computador;

console.log("Marca:", marca);
console.log("RAM:", ram);
console.log("SSD:", ssd);
console.log("Tarjeta gráfica:", tarjetaGrafica);