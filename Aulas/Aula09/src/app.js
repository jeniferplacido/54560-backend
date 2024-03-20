// Importa o módulo 'express' para criar o servidor web
const express = require('express');

// Importa o módulo 'express-handlebars' para usar o Handlebars como template engine
const handlebars = require('express-handlebars');

// Importa o módulo 'utils.js' para obter o diretório base do projeto
const _dirname = require('./utils');

// Cria uma instância do aplicativo Express
const app = express();

// Configura o Handlebars como template engine
app.engine('handlebars', handlebars.engine());

// Define o diretório onde estão os templates Handlebars
app.set('views', _dirname + '/views');

app.use('/', require('./routes/view.router'));

// Define o template engine a ser usado (no caso, Handlebars)
app.set('view engine', 'handlebars');

// Configura o servidor para servir arquivos estáticos na pasta 'public' (CSS, JS, imagens, etc.)
app.use(express.static(_dirname + '/public'));

// Define uma rota para a raiz do servidor ('/')
// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
