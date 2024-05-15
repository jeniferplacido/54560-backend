let soma = 0;
for (let i = 0; i <= 10000000; i++) {
  soma += i;
}
process.send(soma); // Envia o resultado para o processo pai
