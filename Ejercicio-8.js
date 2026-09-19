const usuario = {
    nombre: "Carlos",
    edad: 30
};

const copiaAsignacion = usuario;

copiaAsignacion.nombre = "Pedro";

console.log("Usuario original:", usuario);
console.log("Copia por asignación:", copiaAsignacion);


const copiaSpread = { ...usuario };

copiaSpread.nombre = "Juan";

console.log("Usuario original después de Spread:", usuario);
console.log("Copia por Spread:", copiaSpread);