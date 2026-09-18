type Producto = {
    id: number
    nombre: string
    precio: number
    disponible: boolean
}

let producto1: Producto = {
    id: 1201,
    nombre: 'Manzana',
    precio: 5000,
    disponible: true
}

let producto2: Producto = {
    id: 1202,
    nombre: 'papa',
    precio: 3000,
    disponible: false
}

console.log(producto1);
console.log(producto2);

