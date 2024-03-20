// Importa o módulo 'express' para criar o servidor web
const express = require('express');
// Importa o módulo 'express-handlebars' para usar o Handlebars como template engine
const handlebars = require('express-handlebars');
// Importa o módulo 'body-parser' para processar dados do formulário
const bodyParser = require('body-parser');
// Importa o módulo 'utils.js' para obter o diretório base do projeto
const _dirname = require('./utils');

// Cria uma instância do aplicativo Express
const app = express();

// Configura o Handlebars como template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

// Configura o servidor para servir arquivos estáticos na pasta 'public' (CSS, JS, imagens, etc.)
app.use(express.static(_dirname + '/public'));

// Configura o body-parser para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Array para armazenar os usuários registrados
let usuarios = [];

// Define uma rota GET para exibir o formulário de registro
app.get('/registrar', (req, res) => {
    res.render('register');
});

// Define uma rota POST para receber os dados do formulário e registrar o usuário
app.post('/usuario', (req, res) => {
    const { nome, email, senha } = req.body;
    // Adiciona o novo usuário à matriz de usuários
    usuarios.push({ nome, email, senha });
    console.log('Usuário registrado com sucesso:', { nome, email, senha });
    res.send('Usuário registrado com sucesso!');
});

// Rota para exibir todos os usuários registrados
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
