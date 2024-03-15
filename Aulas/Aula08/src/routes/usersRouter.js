const express = require('express');
const router = express.Router();

// Cria um roteador Express para lidar com as rotas relacionadas aos usuários
// Array para armazenar os usuários
let users = [];

// Define uma rota GET para a raiz do roteador ('/api/users/')
router.get('/', (req, res) => {
    // Retorna todos os usuários armazenados no array 'users' como uma resposta JSON
    res.json(users);
});

// Define uma rota POST para a raiz do roteador ('/api/users/')
router.post('/', (req, res) => {
    try {
        // Obtém os dados do novo usuário do corpo da requisição
        const novoUsuario = req.body;
        // Adiciona o novo usuário ao array 'users'
        users.push(novoUsuario);
        // Retorna o novo usuário como resposta, juntamente com o status 201 (Created)
        res.status(201).json(novoUsuario);
    } catch (error) {
        // Se ocorrer um erro ao adicionar o usuário, retorna uma resposta com status 500 (Internal Server Error)
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
});

// Exporta o roteador para ser utilizado em outros arquivos
module.exports = router;
