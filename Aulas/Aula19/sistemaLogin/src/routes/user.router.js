const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { checkAuthenticated } = require('../middleware/auth');
const { publico } = require('../middleware/public');
const { privado } = require('../middleware/private');

// Rota para página de registro (GET)
router.get('/registro', (req, res) => {
    res.render('registro'); // Supondo que você tenha um arquivo de modelo chamado 'registro'
});

// Rota para registrar um novo usuário (POST)
router.post('/registro',  async (req, res) => {
    try {
        const { primeiro_nome, segundo_nome, email, idade, senha } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('E-mail já registrado');
        }
        const newUser = new User({ primeiro_nome, segundo_nome, email, idade, senha });
        await newUser.save();
        // Redireciona para a página de login após o registro com mensagem
        res.render('login', { message: 'Registro bem-sucedido! Faça login para continuar.' });
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).send('Erro interno');
    }
});

// Rota para a página de perfil (GET)
router.get('/perfil', checkAuthenticated, (req, res) => {
    const { primeiro_nome, segundo_nome, email, idade } = req.session.user;
    res.render('perfil', { primeiro_nome, segundo_nome, email, idade });
});

// Rota para atualizar um usuário (PUT)
router.put('/perfil/:id', checkAuthenticated, async (req, res) => {
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
router.delete('/perfil/:id', checkAuthenticated, async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        // Redireciona para a página de perfil após excluir o usuário
        res.redirect('/perfil');
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        res.status(500).send('Erro interno');
    }
});

module.exports = router;
