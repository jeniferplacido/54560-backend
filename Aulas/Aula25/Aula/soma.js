// Obtém os argumentos passados ao executar o programa
const args = process.argv.slice(2); // Ignora os dois primeiros argumentos (node e nome do script)

// Verifica se foram passados argumentos suficientes
if (args.length < 2) {
  console.log('Uso: node soma.js <número1> <número2> ...');
  process.exit(1); // Encerra o programa com código de erro
}

// Converte os argumentos para números e calcula a soma
const numeros = args.map(Number); // Converte cada argumento para número
const soma = numeros.reduce((total, numero) => total + numero, 0);

console.log('Soma dos números:', soma);

// Execute o script com o comando node soma.js 10 20 30 40
// O resultado é: Soma dos números: 100
// Execute o script com o comando node soma.js
// O resultado é: mensagem de uso e encerra o programa com o código de erro



// function complexOperation() {
//   let result = 0;
//   for(let i = 0; i<5e9; i++) {
//     resultado += i;
//   }
//   return result;
// }
// app.get('/sum', (req, res) => {
//   const result = complexOperation();
//   res.send(`O resultado da operação é: ${result}`);
// })