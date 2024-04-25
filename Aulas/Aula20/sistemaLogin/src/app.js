const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const { createHash } = require('../src/utils'); // Importa a função createHash dos utilitários

const app = express();

// Configuração do Handlebars como mecanismo de visualização
app.engine('handlebars', handlebars.engine()); // Define o mecanismo do Handlebars
app.set('view engine', 'handlebars'); // Configura o Handlebars como mecanismo de visualização
app.set('views', __dirname + '/views'); // Define o diretório onde estão os arquivos de template Handlebars

// Configurar middleware para servir arquivos estáticos na rota '/public'
app.use('/public', express.static(__dirname + '/public')); // Define a pasta de arquivos estáticos

// Middleware para processar dados de formulário
app.use(express.urlencoded({ extended: true })); // Permite processamento de dados de formulário
app.use(express.json()); // Permite o uso de JSON para processamento de dados

// Middleware para cookies
app.use(cookieParser()); // Habilita o uso de cookies

// Configuração da sessão
app.use(session({
    store: MongoStore.create({ // Usa o MongoStore para armazenar sessões no MongoDB
        mongoUrl: 'mongodb+srv://jeni:123@cluster0.mjglqe4.mongodb.net/', // URL do MongoDB
        ttl: 15, // Tempo de vida da sessão em minutos
    }),
    secret: 'Cod3r', // Chave secreta para assinar a sessão
    resave: false, // Evita que a sessão seja regravada no armazenamento
    saveUninitialized: false // Evita que sessões não inicializadas sejam salvas no armazenamento
}));

// Rotas
const userRouter = require('./routes/user.router'); // Importa as rotas do usuário
const sessionRouter = require('./routes/session.router'); // Importa as rotas de sessão
app.use('/', userRouter); // Define as rotas do usuário
app.use('/', sessionRouter); // Define as rotas de sessão

// Conexão com o MongoDB usando o Mongoose
mongoose.connect('mongodb+srv://jeni:123@cluster0.mjglqe4.mongodb.net/')
    .then(() => console.log('Conectado ao MongoDB com sucesso!')) // Mensagem de sucesso ao conectar ao MongoDB
    .catch(error => console.log('Erro ao conectar ao MongoDB:', error)); // Mensagem de erro em caso de falha na conexão

// Inicia o servidor na porta 8080
app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
