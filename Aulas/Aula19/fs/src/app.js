const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileStore = require('session-file-store');

// Cria uma instância do armazenamento de sessão usando a session-file-store
const fileStorage = fileStore(session);

// Cria uma instância do aplicativo Express
const app = express();

// Configura o uso do middleware cookie-parser
app.use(cookieParser());
// Configura o uso do middleware express-session
app.use(session({
    // Define o armazenamento das sessões como a instância do fileStorage
    store: new fileStorage({
        path:'./sessions', // Caminho onde os arquivos de sessão serão armazenados
        ttl: 100, // Tempo de vida da sessão em segundos (100 segundos neste caso)
        retries: 0 // Número de tentativas de reescrita do arquivo em caso de falha (0 neste caso)
    }),
    secret: 'Cod3r', // Chave secreta usada para assinar a sessão
    resave: false, // Não forçar a sessão a ser salva no armazenamento a cada solicitação
    saveUninitialized: false, // Não salvar sessões não modificadas
}));

// Rota GET para '/session'
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

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
