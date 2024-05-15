// Importando a biblioteca express, que é uma estrutura de aplicativo web para Node.js
const express = require('express');

// Importando a classe Command da biblioteca commander, que facilita a criação de interfaces de linha de comando
const { Command } = require('commander');

// Importando a biblioteca dotenv, que permite carregar variáveis de ambiente de um arquivo .env para o programa
const dotenv = require('dotenv');

// Criando uma instância do aplicativo Express
const app = express();

// Criando uma instância do programa Commander para lidar com argumentos de linha de comando
const program = new Command();

// Definindo uma opção de linha de comando '-m' ou '--mode' para definir o ambiente de trabalho
program
  .option('-m, --mode <mode>', 'Define o ambiente de trabalho')
  .parse(process.argv);

// Obtendo as opções passadas pela linha de comando
const options = program.opts();

// Verificando se a opção 'mode' foi definida como 'development' ou 'production'
if (options.mode === 'development') {
  // Carregando as variáveis de ambiente do arquivo .env.dev se o modo for 'development'
  dotenv.config({ path: './.env.dev' });
} else if (options.mode === 'production') {
  // Carregando as variáveis de ambiente do arquivo .env.prod se o modo for 'production'
  dotenv.config({ path: './.env.prod' });
} else {
  // Caso o modo não seja definido corretamente, exibe uma mensagem de erro e encerra o programa
  console.error('Ambiente de trabalho não definido');
  process.exit(1);
}

// Obtendo a porta a partir das variáveis de ambiente
const PORT = process.env.PORT;

// Rota principal que responde a solicitações GET na raiz ('/')
app.get('/', (req, res) => {
  // Enviando uma resposta com uma mensagem contendo o modo de ambiente e a porta utilizada
  res.send(`Hello Coders, servidor rodando no modo ${process.env.NODE_ENV} na porta ${PORT}`);
});

// Iniciando o servidor Express para escutar na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
