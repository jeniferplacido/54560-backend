const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

const registro = async (req, res) => {
    try {
        const { nome, sobrenome, email, senha } = req.body;
        await authService.registro(nome, sobrenome, email, senha);
        res.redirect('/login');
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const token = await authService.login(email, senha);
        res.cookie('token', token);
        res.redirect('/produtos');
    } catch (error) {
        console.error('Erro no login:', error.message);
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    registro,
    login
};
