function obtenerPrimero<T>(arreglo: T[]): T {
    return arreglo[0];
}

const numeros: number[] = [10, 20, 30, 40];
console.log("Primer número:", obtenerPrimero(numeros));

const nombre: string[] = ["Carlos", "Juan", "Pedro"];
console.log("Primer nombre:", obtenerPrimero(nombre));

const valores: boolean[] = [true, false, true];
console.log("Primer booleano:", obtenerPrimero(valores));