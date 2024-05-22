// Importando o módulo Express, que é um framework para construir aplicações web em Node.js
const express = require('express');

// Inicializando o aplicativo Express
const app = express();

// Configurando o middleware do aplicativo para analisar o corpo das requisições como JSON
app.use(express.json());

// Definindo uma rota GET para '/test'
// Quando essa rota é acessada, ela envia uma resposta com uma mensagem de teste
app.get('/test', (req, res) => {
    res.send('Testando o servidor express');
})

// Iniciando o servidor na porta 8080
// Quando o servidor é iniciado, ele exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
})