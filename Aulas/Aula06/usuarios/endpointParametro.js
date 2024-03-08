// Importa o módulo express
const express = require('express');
// Cria uma instância do aplicativo Express
const app = express();
// Rota com um parâmetro (:nome)
app.get('/usuarios/:nome', (req, res) => {
  // Exibe o valor do parâmetro 'nome' no console
 // console.log(req.params.nome) 
  // Envia uma resposta com uma mensagem de boas-vindas contendo o valor do parâmetro 'nome'
  res.send(`Bem-vindo,  ${req.params.nome}`);
});
// Rota com dois parâmetros (:nome e :sobrenome)
app.get('/usuarios/:nome/:sobrenome', (req, res) => {
  // Exibe os valores dos parâmetros 'nome' e 'sobrenome' no console
  //console.log(req.params.nome)
  //console.log(req.params.sobrenome);
  // Envia uma resposta com o nome completo formado pelos valores dos parâmetros 'nome' e 'sobrenome'
  res.send(`O nome completo é ${req.params.nome} ${req.params.sobrenome}`);
});
// Inicia o servidor e o faz escutar na porta definida (8080)
app.listen(8080, () => {
  console.log(`Servidor Express está rodando na porta 8080`);
});
