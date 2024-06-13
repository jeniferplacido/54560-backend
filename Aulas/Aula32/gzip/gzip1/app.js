// Aqui estamos importando um pacote chamado 'express'. Express é uma biblioteca que nos ajuda a criar servidores web.
const express = require('express');

// Aqui estamos criando um novo servidor web usando o Express.
const app = express();

// Aqui estamos dizendo ao nosso servidor o que fazer quando alguém acessa a rota '/stringridiculamentegrande'.
app.get('/stringridiculamentegrande', (req, res) => {
    // Primeiro, criamos uma string muito longa.
    let string = 'Olá Coders, eu sou string ridiculamente longa';
    // Em seguida, adicionamos a mesma frase à nossa string 1010 vezes.
    for (let i = 0; i < 1010; i++) {
        string += 'Olá Coders, eu sou string ridiculamente longa';
    }
    // Finalmente, enviamos a string como resposta para quem acessou a rota.
    res.send(string);
})

// Aqui estamos dizendo ao nosso servidor para começar a escutar na porta 8080.
// Quando o servidor começar a rodar, ele vai imprimir 'Servidor rodando na porta 8080' no console.
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
})