// Importa o módulo express
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Cria uma rota para o método GET na rota '/saldar'
app.get('/saldar', (req, res) => {
  // Envia a resposta com a mensagem "Olá pessoal, mas agora do express!"
  res.send('Olá pessoal, mas agora do express!');
});

// Inicia o servidor e o faz escutar na porta definida
app.listen(8080, () => {
  console.log(`Servidor Express está rodando na porta 8080!`);
});
