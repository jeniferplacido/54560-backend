const express = require('express');
const router = express.Router();

// Array para armazenar os usuários
let users = [];

// Rota GET para obter todos os usuários
router.get('/', (req, res) => {
    res.json(users);
});

// Rota POST para adicionar um novo usuário
router.post('/', (req, res) => {
    try {
        const novoUsuario = req.body;
        users.push(novoUsuario);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
});

module.exports = router;
