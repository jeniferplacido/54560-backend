let globalVar = "Variável global";

function exemplo() {
    let localVar = "Variável local";
    console.log("Dentro da função:");
    console.log(globalVar); // Variável global acessível dentro da função
    console.log(localVar); // Variável local acessível dentro da função
}

console.log("Fora da função:");
console.log(globalVar); // Variável global acessível fora da função
console.log(localVar); // Erro: localVar is not defined (variável local não é acessível fora da função)
exemplo();