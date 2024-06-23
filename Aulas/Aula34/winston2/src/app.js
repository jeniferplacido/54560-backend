// Importa o módulo 'express'
const express = require('express');

// Importa a função 'addLogger' do módulo 'logger' no diretório 'utils'. 
// Esta função adiciona um logger à requisição.
const addLogger = require('./utils/logger'); 

// Cria uma nova aplicação Express.
const app = express();

// Usa a função 'addLogger' como um middleware. 
// Um middleware é uma função que é executada 
// para cada requisição que a aplicação recebe.
app.use(addLogger);

// Define uma rota GET para a raiz '/'.
// Quando um cliente faz uma requisição GET para essa rota, 
// a função de callback é chamada.
app.get('/', (req, res) => {
    // Usa o logger (que foi adicionado à requisição pelo middleware 'addLogger') para registrar uma mensagem de aviso.
    req.logger.warn('Hello World!');
    // Envia uma resposta HTTP com um objeto JSON 
    // que tem uma propriedade 'message' com o valor 'Hello World! Hello Coders!'.
    res.send({message:'Hello World! Hello Coders!'});
});

// Faz a aplicação começar a escutar por requisições HTTP na porta 8080. Quando a aplicação começa a escutar, a função de callback é chamada e uma mensagem é registrada no console.
app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
