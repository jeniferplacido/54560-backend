const express = require('express');
const session = require('express-session');

const app = express();

// Configuração do uso do middleware de sessão
app.use(session({
    secret: 'C0d3r', // Chave secreta usada para assinar a sessão
    resave: false, // Evita que a sessão seja salva no servidor a cada requisição
    saveUninitialized: true // Define se a sessão será salva mesmo se estiver vazia
}));

// Rota para verificar a sessão do usuário
app.get('/session', (req, res) => {
    if (req.session.contador) {
        // Se a sessão 'contador' existir, incrementa o contador
        req.session.contador++;
        res.send(`Você visitou o site ${req.session.contador} vezes`);
    } else {
        // Se é a primeira visita, define o contador como 1
        req.session.contador = 1;
        res.send('Primeira vez visitando o site');
    }
});

// Rota para efetuar logout e destruir a sessão
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err)
            res.send('Logout efetuado com sucesso!');
        else
            res.send({ status: 'Erro no logout', body: err });
    });
});

// Inicia o servidor na porta 8080
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
