const ventas = [250, 400, 150, 600, 800];

const totalVendido = ventas.reduce((acum, venta) => acum + venta, 0);
console.log(totalVendido)

const ventaMasAlta = Math.max(...ventas);
console.log(ventaMasAlta)

const promedio = totalVendido / ventas.length;
console.log(promedio);