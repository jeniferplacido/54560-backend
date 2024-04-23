const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { checkAuthenticated } = require('../middleware/auth');

// Rota para registrar um novo usuário (POST)
router.post('/registro', async (req, res) => {
    try {
        const { primeiro_nome, segundo_nome, email, idade, senha } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('E-mail já registrado');
        }
        const newUser = new User({ primeiro_nome, segundo_nome, email, idade, senha });
        await newUser.save();
        // Renderiza a página de login após o registro
        res.render('login', { message: 'Registro bem-sucedido! Faça login para continuar.' });
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).send('Erro interno');
    }
});

// Rota para obter todos os usuários (GET)
router.get('/users', checkAuthenticated, async (req, res) => {
    try {
        const users = await User.find();
        // Renderiza a página de usuários com a lista de usuários
        res.render('users', { users });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).send('Erro interno');
    }
});

// Rota para atualizar um usuário (PUT)
router.put('/users/:id', checkAuthenticated, async (req, res) => {
    const { id } = req.params;
    const { primeiro_nome, segundo_nome, email, idade, senha } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { primeiro_nome, segundo_nome, email, idade, senha }, { new: true });
        // Renderiza a página de perfil atualizada do usuário
        res.render('perfil', { user: updatedUser });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).send('Erro interno');
    }
});

// Rota para excluir um usuário (DELETE)
router.delete('/users/:id', checkAuthenticated, async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        // Redireciona para a página de usuários após excluir o usuário
        res.redirect('/users');
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        res.status(500).send('Erro interno');
    }
});

module.exports = router;


