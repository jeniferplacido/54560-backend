// Importações necessárias
const express = require('express'); // Importa o módulo Express.js para criar o servidor web
const passport = require('passport'); // Importa o módulo Passport.js para lidar com autenticação de usuários
const LocalStrategy = require('passport-local').Strategy; // Importa a estratégia de autenticação local do Passport.js
const User = require('../model/User'); // Importa o modelo de usuário
const { checkAuthenticated } = require('../middleware/auth'); // Importa um middleware para verificar se o usuário está autenticado
const { publico } = require('../middleware/public'); // Importa um middleware para rotas públicas
const { privado } = require('../middleware/private'); // Importa um middleware para rotas privadas
const { createHash, isValidPassword } = require('../utils'); // Importa funções úteis

// Cria um novo roteador Express.js
const router = express.Router();

// Rota para exibir o formulário de registro
router.get('/registro', (req, res) => {
    res.render('registro'); // Renderiza a página de registro
});


// Rota para exibir o formulário de login
router.get('/login', (req, res) => {
    res.render('login'); // Renderiza a página de login
});


// Rota para autenticar com o GitHub
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }),
async (req, res) => {
    console.log('Entrou no github'); // Loga uma mensagem quando o usuário entra no GitHub
});

// Callback de retorno do GitHub após autenticação
router.get('/api/sessions/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }),
async (req, res) => {
    req.session.user = req.user; // Salva o usuário na sessão
    res.redirect('/perfil'); // Redireciona para a página de perfil
});

// Rota para logout
router.get('/logout', (req, res) => {
    req.logout(() => {}); // Desloga o usuário
    req.session.destroy(); // Destrói a sessão
    res.redirect('/login'); // Redireciona para a página de login
});

// Exporta o roteador com todas as rotas configuradas
module.exports = router;
