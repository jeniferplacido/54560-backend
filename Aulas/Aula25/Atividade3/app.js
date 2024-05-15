const express = require('express');
const { fork } = require('child_process');

const app = express();
let visitas = 0;

// Rota raiz que conta o número total de visitas
app.get('/', (req, res) => {
  visitas++;
  res.send(`Número total de visitas: ${visitas}`);
});

// Rota que realiza o cálculo de adição de forma síncrona (bloqueante)
app.get('/calculo-bloq', (req, res) => {
  const start = Date.now();
  let soma = 0;
  for (let i = 0; i <= 100000; i++) {
    soma += i;
  }
  const end = Date.now();
  const tempo = end - start;
  res.send(`Resultado do cálculo bloq: ${soma}. Tempo de execução: ${tempo}ms.`);
});

// Rota que realiza o cálculo em um processo filho (não bloqueante)
app.get('/calculo-nobloq', (req, res) => {
  const childProcess = fork('./calculo.js'); // Arquivo com o código do cálculo
  childProcess.on('message', (message) => {
    res.send(`Resultado do cálculo nobloq: ${message}`);
  });
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
