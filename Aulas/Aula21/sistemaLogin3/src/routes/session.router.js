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

router.post('/registrar', async (req, res) => {
    const {nome, email, senha} = req.body;
    const exist = users.find(user => user.email === email);
    if (exist) return res.status(400).send('Email ja existe');

    const user ={
        nome,
        email,
        senha
    }
    users.push(user);

    const acess_token = generateToken(user);
    res.send({status: 'sucess', acess_token});
})

// Rota para exibir o formulário de login
router.get('/login', (req, res) => {
    res.render('login'); // Renderiza a página de login
});

router.post('/login', (req, res) => {
    const {email, senha} = req.body;
    const user = users.find(user => user.email && user.senha===senha);
    if (!user) return res.status(400).send({status: 'error', message: 'Email ou senha inválidos'});

    const acess_token = generateToken(user);
    res.send({status: 'sucess', acess_token});
})

router.get('/current', authToken, (req, res) => {
    res.send({status: 'sucess', payload: req.user});
})
// Rota para logout
router.get('/logout', (req, res) => {
    req.logout(() => {}); // Desloga o usuário
    req.session.destroy(); // Destrói a sessão
    res.redirect('/login'); // Redireciona para a página de login
});

// Exporta o roteador com todas as rotas configuradas
module.exports = router;
