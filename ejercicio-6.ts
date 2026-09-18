enum EstadoPedido {
    Pendiente,
    EnProceso,
    Enviado,
    Entregado
}

console.log(EstadoPedido.Pendiente);
console.log(EstadoPedido.EnProceso);
console.log(EstadoPedido.Enviado);
console.log(EstadoPedido.Entregado);


let estado: EstadoPedido = EstadoPedido.EnProceso;

console.log(estado);