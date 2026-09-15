    
function calculadora(num, num2, operador){
    switch (operador){
        case "+":
            console.log("El resultado es: " + (parseInt(num) + parseInt(num2)));
            break;
        case "-":
            console.log("El resultado es: " + (parseInt(num) - parseInt(num2)));
            break;
        case "*":
            console.log("El resultado es: " + (parseInt(num) * parseInt(num2)));
            break;
        case "/":
            console.log("El resultado es: " + (parseInt(num) / parseInt(num2)));
            break;
        default:
            console.log("Operador no válido");
    }
}
calculadora(10, 8, "*");