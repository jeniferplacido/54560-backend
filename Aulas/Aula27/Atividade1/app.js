// Importando os módulos necessários
const express = require('express'); // Express é um framework para construir aplicações web em Node.js
const cors = require('cors'); // CORS é um pacote node.js para fornecer um middleware Connect/Express que pode ser usado para habilitar CORS com várias opções.

// Inicializando o aplicativo Express
const app = express();

// Configurando os middlewares do aplicativo
app.use(cors()); // Usa o middleware CORS para permitir que outros domínios façam requisições para este servidor
app.use(express.json()); // Usa o middleware express.json para analisar o corpo das requisições como JSON

// Definindo uma rota GET para '/test'
app.get('/test', (req, res) => {
    // Quando essa rota é acessada, ela envia uma resposta com uma mensagem de teste
    res.send({message:'Testando o servidor express'});
})

// Iniciando o servidor na porta 8080
app.listen(8080, () => {
    // Quando o servidor é iniciado, ele exibe uma mensagem no console
    console.log('Servidor rodando na porta 8080');
})