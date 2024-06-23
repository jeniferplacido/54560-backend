const express = require('express');

const operacoesMatematicas = require('operacoes-mat');

const app = express();
// Rota para a operação de soma
app.get('/soma', (req, res) => {
  const { a, b } = req.query;
  const resultado = operacoesMatematicas.somar(Number(a), Number(b));
  res.send(`Resultado da soma: ${resultado}`);
});

// Rota para a operação de subtração
app.get('/subtracao', (req, res) => {
  const { a, b } = req.query;
  const resultado = operacoesMatematicas.subtrair(Number(a), Number(b));
  res.send(`Resultado da subtração: ${resultado}`);
});

// Rota para a operação de multiplicação
app.get('/multiplicacao', (req, res) => {
  const { a, b } = req.query;
  const resultado = operacoesMatematicas.multiplicar(Number(a), Number(b));
  res.send(`Resultado da multiplicação: ${resultado}`);
});

// Rota para a operação de divisão
app.get('/divisao', (req, res) => {
  const { a, b } = req.query;
  const resultado = operacoesMatematicas.dividir(Number(a), Number(b));
  res.send(`Resultado da divisão: ${resultado}`);
});


app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
