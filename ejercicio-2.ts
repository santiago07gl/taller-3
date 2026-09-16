let numeros: number[] =[1, 2, 3, 4];
let strings: string[] = ["hola", "adios", "xd", ":)"]; 
let booleanos: boolean[] = [true, false, true, false];  

numeros.push(5);
console.log(numeros);
strings.push("no");
console.log(strings);
booleanos.push(true);
console.log(booleanos);

numeros.pop();
console.log(numeros);
strings.pop();
console.log(strings);
booleanos.pop();
console.log(booleanos);

for(const numero of numeros){
    console.log(numero);
}

for(const string of strings){
    console.log(string);
}

for(const boolean of booleanos){
    console.log(boolean);
}

