// Importa os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/db');
const cors = require('cors');

// Cria uma nova aplicação Express
const app = express();
// Configura o middleware para analisar o corpo das solicitações como JSON
app.use(bodyParser.json());
// Configura o middleware CORS para permitir solicitações de determinados origens e métodos
app.use(cors({origin: ['http://localhost:8080', 'http://127.0.0.1:5500'], methods: ['GET', 'POST', 'PUT', 'DELETE']}));

// Importa os roteadores
const usuarioRouter = require('./routes/usuarioRouter');
const comercioRouter = require('./routes/comercioRouter');
const pedidoRouter = require('./routes/pedidoRouter');

// Conecta ao banco de dados
connection();

// Configura os roteadores para serem usados com determinados caminhos
app.use('/api/comercio', comercioRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/pedido', pedidoRouter);

// Inicia o servidor na porta 8080
app.listen(8080, () => {
    console.log(`Servidor Express está rodando na porta 8080`);
});