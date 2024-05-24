// Importa o módulo express, que é um framework para construir aplicações web em Node.js
const express = require('express');

// Importa as rotas de produto do arquivo './routes/produtoRoutes'
const produtoRoutes = require('./routes/produtoRoutes');

// Cria uma nova aplicação express
const app = express();

// Usa o middleware express.json() para analisar o corpo das requisições como JSON
app.use(express.json());

// Usa as rotas de produto na aplicação
// Todas as rotas definidas em produtoRoutes serão usadas com o prefixo '/'
app.use('/', produtoRoutes);

// Define a porta em que a aplicação vai rodar
const PORT =  8080;

// Inicia o servidor na porta especificada
// Quando o servidor estiver rodando, loga uma mensagem no console
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
