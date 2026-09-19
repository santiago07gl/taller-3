type Usuario = {
    id: number;
    nombre: string;
    edad: number;
    activo: boolean;
};

const usuarios: Usuario[] = [
    {
        id: 1,
        nombre: "Carlos",
        edad: 20,
        activo: true
    },
    {
        id: 2,
        nombre: "Ana",
        edad: 22,
        activo: false
    },
    {
        id: 3,
        nombre: "Luis",
        edad: 19,
        activo: true
    }
];

function agregarUsuario(usuario: Usuario): void {
    usuarios.push(usuario);
}

agregarUsuario({
    id: 4,
    nombre: "Laura",
    edad: 21,
    activo: true
});

function buscarUsuario(id: number): Usuario | undefined {
    return usuarios.find(usuario => usuario.id === id);
}

console.log("Usuario encontrado:", buscarUsuario(2));

function usuariosActivos(): Usuario[] {
    return usuarios.filter(usuario => usuario.activo);
}

console.log("Usuarios activos:", usuariosActivos());

console.log("Arreglo final:", usuarios);

export {};