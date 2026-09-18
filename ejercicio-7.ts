class Vehiculo {
    marca: string;
    modelo: number;

    constructor(marca: string, modelo:number){
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInformacion(): void{
        console.log(this.marca, this.modelo);
    }

}

const vehiculo = new Vehiculo("Toyota", 1234);

const vehiculo2 = new Vehiculo("Nissan", 5678);

vehiculo.mostrarInformacion();
vehiculo2.mostrarInformacion();
