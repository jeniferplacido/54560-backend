const express = require('express');
const router = express.Router();
const User = require('../model/User'); 
const { isValidPassword, createHash } = require('../utils');

// Middleware para disponibilizar usuário da sessão em todas as views
router.use((req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user; // Disponibiliza o usuário da sessão para todas as views
    }
    next(); // Chama a próxima função middleware
});

// Rota para exibir o formulário de login (GET)
router.get('/login', (req, res) => {
    res.render('login'); // Renderiza o formulário de login
});

// Rota para processar o login (POST)
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const user = await User.findOne({ email }); // Busca o usuário no banco de dados pelo email
    if (!user || !isValidPassword(email, senha)) { // Verifica se o usuário não existe ou a senha é inválida
        return res.status(401).send('Senha inválida.'); // Retorna erro de credenciais inválidas
    }
    req.session.user = user; // Define o usuário na sessão
    res.redirect('/perfil'); // Redireciona para a página de perfil
});

// Rota para exibir o perfil do usuário (GET)
router.get('/perfil', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login'); // Redireciona para o login se o usuário não estiver autenticado
    } else {
        const { primeiro_nome, segundo_nome, email, idade } = req.session.user;
        res.render('perfil', { primeiro_nome, segundo_nome, email, idade }); // Renderiza a página de perfil com os dados do usuário
    }
});

// Rota para exibir o formulário de redefinição de senha (GET)
router.get('/reset-password', (req, res) => {
    res.render('reset-senha'); // Renderiza o formulário de redefinição de senha
});

// Rota para processar a redefinição de senha (POST)
router.post('/reset-password', async (req, res) => {
    const { email, novaSenha } = req.body;
    try {
        const user = await User.findOne({ email }); // Busca o usuário no banco de dados pelo email
        if (!user) {
            return res.status(400).send('E-mail não encontrado.'); // Retorna erro se o e-mail não foi encontrado
        }

        // Criptografa a nova senha antes de atualizar no banco de dados
        const hashedNovaSenha = createHash(novaSenha);

        // Atualiza a senha do usuário no banco de dados
        user.senha = hashedNovaSenha;
        await user.save();

        res.redirect('/login'); // Redireciona para o login após a redefinição de senha
    } catch (error) {
        console.error('Erro ao redefinir senha:', error); // Log de erro caso ocorra algum problema na redefinição de senha
        res.status(500).send('Erro interno ao redefinir senha.'); // Retorna erro interno caso ocorra um erro no servidor
    }
});

// Rota para realizar o logout do usuário (GET)
router.get('/logout', (req, res) => {
    req.session.destroy((err) => { // Destroi a sessão do usuário
        if (err) {
            console.error('Erro ao destruir sessão:', err); // Log de erro caso ocorra um erro ao destruir a sessão
            res.status(500).send('Erro ao realizar logout.'); // Retorna erro interno caso ocorra um erro no servidor
        } else {
            res.redirect('/login'); // Redireciona para o login após o logout
        }
    });
});

module.exports = router; // Exporta o router para ser utilizado em outros arquivos da aplicação
