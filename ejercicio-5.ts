
function mostrarDato(tipo: string | number){

    if (typeof(tipo) === "string" ){
        console.log(tipo.toUpperCase());

    } else{
        console.log(tipo.toFixed(2));
    }
    
}
mostrarDato(2);
mostrarDato("minuscula")