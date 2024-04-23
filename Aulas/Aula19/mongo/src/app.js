const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongooseStore = require('connect-mongo');

// Cria uma instância do aplicativo Express
const app = express();

// Configura o uso do middleware cookie-parser
app.use(cookieParser());

// Configura o uso do middleware express-session com armazenamento em MongoDB usando connect-mongo
app.use(session({
    store: MongooseStore.create({
        mongoUrl: 'mongodb+srv://agre:agre@cluster0.9xfjfdm.mongodb.net/',
        collectionName: 'sessions', // URL de conexão com o MongoDB
        ttl: 15, // Tempo de vida da sessão em segundos
    }),
    secret: 'Cod3r', // Chave secreta usada para assinar a sessão
    resave: false, // Não forçar a sessão a ser salva no armazenamento a cada solicitação
    saveUninitialized: false // Não salvar sessões não modificadas
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

// Rota GET para '/login'
app.get('/login', (req, res) => {
    const { username, password } = req.query;
    // Verifica se o nome de usuário e senha são válidos
    if (username !== 'Jeni' && password !== '123')
        return res.send('Usuário ou senha inválidos!');
    // Define as informações de usuário na sessão
    req.session.username = username;
    req.session.admin = true;
    res.send('Login efetuado com sucesso!');
});

// Middleware de autenticação
function auth(req, res, next) {
    if (req.session?.username === 'Jeni' && req.session?.admin) {
        return next(); // Se autenticado, passa para a próxima rota
    } else {
        return res.send('Erro de autenticação');
    }
}

// Rota GET protegida '/privado' que requer autenticação
app.get('/privado', auth, (req, res) => {
    res.send('Se souber o que é isso, é porque você está logado!');
});

// Rota GET para '/logout'
app.get('/logout', (req, res) => {
    // Destroi a sessão ao fazer logout
    req.session.destroy(err => {
        if (!err)
            res.send('Logout efetuado com sucesso!');
        else
            res.send({ status: 'Erro no logout', body: err });
    });
});

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
