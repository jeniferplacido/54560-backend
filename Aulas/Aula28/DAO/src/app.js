// Importa o módulo Express, que é um framework para construir aplicações web em Node.js
const express = require('express');

// Importa o módulo de contatos, que provavelmente contém as rotas para manipular contatos
const contacts = require('./model/contatos');

// Importa o módulo Mongoose, que é uma biblioteca para interagir com o MongoDB
const mongoose = require('mongoose');

// Cria uma nova aplicação Express
const app = express();

// Conecta ao MongoDB usando a string de conexão fornecida
const connection = mongoose.connect('URL');


// Configura o middleware do Express para usar as rotas de contatos quando a URL começa com '/contatos'
app.use('/contatos', contacts);

// Inicia o servidor na porta 8080 e imprime uma mensagem no console quando o servidor está rodando
app.listen(8080, () => console.log('Servidor rodando na porta 8080'));