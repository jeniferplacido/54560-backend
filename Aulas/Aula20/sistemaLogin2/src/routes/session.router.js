const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/User');
const { checkAuthenticated } = require('../middleware/auth');
const { publico } = require('../middleware/public');
const { privado } = require('../middleware/private');
const { createHash, isValidPassword } = require('../utils');

const router = express.Router();

// Rota para exibir o formulário de registro
router.get('/registro', (req, res) => {
    res.render('registro'); // Renderiza a página de registro
});

// Rota para processar o registro utilizando a estratégia 'registro' do Passport
router.post('/registro', passport.authenticate('registro', {
    successRedirect: '/login', // Redireciona em caso de sucesso
    failureRedirect: '/falharegistro' // Redireciona em caso de falha
}));

// Rota para exibir a mensagem de falha no registro
router.get('/falharegistro', (req, res) => {
    res.send({ error: 'Falha no registro' }); // Retorna a mensagem de erro
});

// Rota para exibir o formulário de login
router.get('/login', (req, res) => {
    res.render('login'); // Renderiza a página de login
});

// Rota para exibir o perfil do usuário (requer autenticação)
router.get('/perfil', checkAuthenticated, (req, res) => {
    // Obtém os dados do usuário da sessão e renderiza a página de perfil
    const { primeiro_nome, segundo_nome, email, idade } = req.session.user;
    res.render('perfil', { primeiro_nome, segundo_nome, email, idade });
});

module.exports = router; // Exporta o router com todas as rotas
