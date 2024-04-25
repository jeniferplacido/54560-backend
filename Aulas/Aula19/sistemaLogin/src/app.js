const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');

const app = express();

// Configuração do Handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views'); // Diretório onde estão os arquivos de template Handlebars
// Configurar middleware para servir arquivos estáticos
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://jeni:123@cluster0.mjglqe4.mongodb.net/',
        ttl: 15,
    }),
    secret: 'Cod3r',
    resave: false,
    saveUninitialized: false
}));

// Rotas
const userRouter = require('./routes/user.router');
const sessionRouter = require('./routes/session.router');
app.use('/', userRouter);
app.use('/', sessionRouter);

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://jeni:123@cluster0.mjglqe4.mongodb.net/')
    .then(() => console.log('Conectado ao MongoDB com sucesso!'))
    .catch(error => console.log('Erro ao conectar ao MongoDB:', error));

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
