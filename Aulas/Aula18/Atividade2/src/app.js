const express = require('express');
const session = require('express-session');

const app = express();

// Configuração do middleware de sessão
app.use(session({
    secret: 'C0d3r',           // Chave secreta usada para assinar o cookie da sessão
    resave: false,              // Evita que a sessão seja salva no armazenamento a cada requisição
    saveUninitialized: true     // Força a criação de uma sessão, mesmo que ela não seja modificada
}));

// Rota principal, que responde ao caminho '/'
app.get('/', (req, res) => {
    let message = '';

    // Rota adicional para fornecer informações sobre a sessão
    app.get('/sessionInfo', (req, res) => {
        res.json(req.session);  // Retorna as informações da sessão em formato JSON
    });
    
    // Verifica se há um nome na sessão do usuário
    if (req.session.name) {
        message = `${req.session.name}, você visitou a página ${req.session.views} vezes.`;
    } else {
        // Se não houver nome na sessão, verifica se foi fornecido um nome nos parâmetros da consulta
        message = `Bem-vindo, ${req.query.name}!`;
    }

    // Verifica se o nome está presente nos parâmetros da consulta
    if (req.query.name) {
        req.session.name = req.query.name; // Armazena o nome na sessão
    }

    // Incrementa o contador de visitas na sessão
    req.session.views = req.session.views ? req.session.views + 1 : 2;

    // Envia a mensagem de boas-vindas ou de visita ao cliente
    res.send(message);
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err)
            res.send('Logout efetuado com sucesso!');
        else res.send({ status: 'Erro no logout', body: err });
    });
});

// Inicia o servidor na porta 3000
app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
});
