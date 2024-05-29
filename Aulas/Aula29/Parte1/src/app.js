// Importa o módulo express
const express = require('express');
// Importa o módulo body-parser
const bodyParser = require('body-parser');

// Cria uma nova aplicação express
const app = express();
// Usa o middleware body-parser para analisar o corpo das solicitações como JSON
app.use(bodyParser.json());

// Importa os roteadores de usuário, comércio e pedido
const usuarioRouter = require('./routes/usuarioRouter');
const comercioRouter = require('./routes/comercioRouter');
const pedidoRouter = require('./routes/pedidoRouter');

// Define as rotas para os roteadores de usuário, comércio e pedido
app.use('/api/comercio', comercioRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/pedido', pedidoRouter);

// Inicia o servidor na porta 8080
app.listen(8080, () => {
    console.log(`Servidor Express está rodando na porta 8080`);
})