// Importando os módulos necessários
require('dotenv').config() // Carrega as variáveis de ambiente do arquivo .env

const express = require('express'); // Express é um framework para construir aplicações web em Node.js
const cookieParser = require('cookie-parser'); // Middleware para analisar cookies
const handlebars = require('express-handlebars'); // Template engine Handlebars para Express
const passport = require('passport'); // Passport é um middleware de autenticação para Node.js
const connection = require('./config/database'); // Importa a configuração do banco de dados
const initializePassport = require('./config/passport.config'); // Importa a configuração do Passport
const UsersRouter = require('./routes/usuario'); // Importa o roteador de usuários
const AdminRouter = require('./routes/admin'); // Importa o roteador de administradores
const ProdutosRouter = require('./routes/produto'); // Importa o roteador de produtos

// Inicializa o aplicativo Express
const app = express();

// Configura os middlewares do aplicativo
app.use(cookieParser()); // Usa o cookie-parser para analisar cookies
app.use(express.json()); // Usa o middleware express.json para analisar o corpo das requisições como JSON
app.use(express.urlencoded({ extended: true })); // Usa o middleware express.urlencoded para analisar o corpo das requisições como strings ou arrays
app.engine('handlebars', handlebars.engine()); // Configura o Handlebars como template engine
app.set('view engine', 'handlebars'); // Define 'handlebars' como a engine de visualização
app.set('views', __dirname + '/views'); // Define o diretório das views
app.use('/public', express.static(__dirname + '/public')); // Define o diretório de arquivos estáticos
app.use(passport.initialize()); // Inicializa o Passport

// Instancia os roteadores
const usersRouter = new UsersRouter(); // Instancia o roteador de usuários
const adminRouter = new AdminRouter(); // Instancia o roteador de administradores
const produtosRouter = new ProdutosRouter(); // Instancia o roteador de produtos

// Adiciona as rotas dos roteadores ao aplicativo
app.use('/user', usersRouter.getRouter()); // Adiciona as rotas do roteador de usuários em '/user'
app.use('/admin', adminRouter.getRouter()); // Adiciona as rotas do roteador de administradores em '/admin'
app.use('/api', produtosRouter.getRouter()); // Adiciona as rotas do roteador de produtos em '/api'

// Inicializa o Passport
initializePassport();

// Conecta ao banco de dados
connection();

// Inicia o servidor na porta 8080
app.listen(8080, () => console.log('Servidor rodando na porta 8080'));