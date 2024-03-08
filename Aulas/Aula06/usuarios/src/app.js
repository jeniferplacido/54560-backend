// Importa o módulo express
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();


// Endpoint para a rota '/bemvindo'
app.get('/bemvindo', (req, res) => {
  // Retorna uma string HTML com letras azuis
  res.send('<p style="color: blue;">Bem Vindo!</p>');
});

// Endpoint para a rota '/usuario'
app.get('/usuario', (req, res) => {
  // Retorna um objeto JSON com os dados de um usuário falso
  const usuario = {
    nome: 'Jeni',
    sobrenome: 'Placido',
    idade: 33,
    email: 'jenifer.sdti@gmail.com'
  };
  res.send(usuario);
});

// Inicia o servidor e o faz escutar na porta definida
app.listen(8080, () => {
  console.log(`Servidor Express está rodando na porta 8080`);
});
