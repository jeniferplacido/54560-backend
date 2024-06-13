// Importa o módulo Express, que é um framework para construir aplicações web no Node.js
const express = require('express');

// Importa o módulo 'express-compression', que é um middleware para o Express que comprime as respostas HTTP.
const compression = require('express-compression');

// Cria uma nova aplicação Express
const app = express();

// Usa o middleware de compressão na aplicação Express. Isso significa que todas as respostas HTTP serão comprimidas.
// A configuração do Brotli está habilitada, que é um algoritmo de compressão mais eficiente que o gzip.
app.use(compression({
    brotli: {
        enabled: true,
        zlib: {}
    }
}));

// Define uma rota GET para a raiz '/'. Quando um cliente faz uma requisição GET para essa rota, a função de callback é chamada.
app.get('/', (req, res) => {
    // Inicia uma string com uma mensagem
    let string = 'Essa é uma outra frase longa';

    // Concatena a mesma mensagem à string 1.000.000 vezes
    for (let i = 0; i < 1000000; i++) {
        string += 'Essa é uma outra frase longa';
    }   

    // Envia a string como resposta para a requisição HTTP
    res.send(string);
})

// Faz a aplicação começar a escutar por requisições HTTP na porta 8080 e imprime uma mensagem no console quando o servidor começa a rodar.
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
})