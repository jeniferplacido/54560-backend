// Importações necessárias
const express = require('express'); // Importa o módulo Express.js para criar o servidor web
const passport = require('passport'); // Importa o módulo Passport.js para lidar com autenticação de usuários
const LocalStrategy = require('passport-local').Strategy; // Importa a estratégia de autenticação local do Passport.js
const User = require('../model/User'); // Importa o modelo de usuário
const { generateToken, authToken } = require('../utils'); // Importa funções úteis do arquivo utils

// Cria um novo roteador Express.js
const router = express.Router();

// Rota para exibir o formulário de registro
router.get('/registro', (req, res) => {
    res.render('registro'); // Renderiza a página de registro
});

router.post('/registro', async (req, res) => {
    const { nome, email, senha } = req.body;
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).send('Email já existe');

    const newUser = new User({
        nome,
        email,
        senha
    });

    await newUser.save();

    const access_token = generateToken(newUser);
    res.send({ status: 'sucess', access_token });
});

// Rota para exibir o formulário de login
router.get('/login', (req, res) => {
    res.render('login'); // Renderiza a página de login
});

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.senha !== senha) {
        return res.status(400).send({ status: 'error', message: 'Email ou senha inválidos' });
    }

    const access_token = generateToken(user);
    res.send({ status: 'success', access_token });
});

router.get('/current', authToken, (req, res) => {
    res.send({ status: 'success', payload: req.user });
});

// Rota para logout
router.get('/logout', (req, res) => {
    req.logout(); // Desloga o usuário
    res.redirect('/login'); // Redireciona para a página de login
});

// Exporta o roteador com todas as rotas configuradas
module.exports = router;
