const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo'); // Importa o connect-mongo para armazenar a sessão no MongoDB
const mongoose = require('mongoose');
const handlebars = require('express-handlebars'); // Importa o Handlebars para templates
const { createHash } = require('./utils'); // Importa a função createHash do arquivo utils
const initializePassport = require('./config/passport.config'); // Importa a função de inicialização do Passport
const passport = require('passport'); // Importa o Passport para autenticação

const app = express(); // Cria uma instância do Express

// Configuração do Handlebars como engine de views
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views'); // Define o diretório de views como '/views'

// Configuração de middleware para servir arquivos estáticos na pasta 'public'
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true })); // Configura o middleware para processar dados de formulário
app.use(express.json()); // Configura o middleware para processar JSON
app.use(cookieParser()); // Configura o cookie parser

// Configuração da sessão utilizando o MongoDB como armazenamento
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://jeni:123@cluster0.mjglqe4.mongodb.net/', // URL do MongoDB
        ttl: 15, // Tempo de vida da sessão em minutos
    }),
    secret: 'Cod3r', // Chave secreta para assinar a sessão
    resave: false,
    saveUninitialized: false
}));

// Inicialização do Passport e configuração para uso em sessões
initializePassport();
app.use(passport.initialize()); // Inicializa o Passport
app.use(passport.session()); // Habilita o uso de sessões no Passport

// Rotas
const userRouter = require('./routes/user.router'); // Importa as rotas do usuário
const sessionRouter = require('./routes/session.router'); // Importa as rotas de sessão
app.use('/', userRouter); // Define as rotas do usuário
app.use('/', sessionRouter); // Define as rotas de sessão

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://jeni:123@cluster0.mjglqe4.mongodb.net/')
    .then(() => console.log('Conectado ao MongoDB com sucesso!')) // Exibe mensagem de sucesso na conexão
    .catch(error => console.log('Erro ao conectar ao MongoDB:', error)); // Exibe mensagem de erro em caso de falha na conexão

// Inicia o servidor na porta 8080
app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
