const { somar, subtrair, multiplicar, dividir } = require('./operacoes-mat');

console.log(somar(5, 3)); // Saída esperada: 8
console.log(subtrair(10, 4)); // Saída esperada: 6
console.log(multiplicar(2, 6)); // Saída esperada: 12
console.log(dividir(15, 3)); // Saída esperada: 5
console.log(dividir(10, 5)); // Saída esperada: "Não é possível dividir por zero"
