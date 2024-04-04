// Importa o módulo Express
const express = require('express');

// Cria um roteador Express para lidar com as rotas relacionadas aos pets
const router = express.Router();

// Array para armazenar os pets
let pets = [];

// Define uma rota GET para a raiz do roteador ('/api/pets/')
router.get('/', (req, res) => {
    // Retorna todos os pets armazenados no array 'pets' como uma resposta JSON
    res.json(pets);
});

// Define uma rota POST para a raiz do roteador ('/api/pets/')
router.post('/', (req, res) => {
    try {
        // Obtém os dados do novo pet do corpo da requisição
        const novoPet = req.body;
        // Adiciona o novo pet ao array 'pets'
        pets.push(novoPet);
        // Retorna o novo pet como resposta, juntamente com o status 201 (Created)
        res.status(201).json(novoPet);
    } catch (error) {
        // Se ocorrer um erro ao adicionar o pet, retorna uma resposta com status 500 (Internal Server Error)
        res.status(500).json({ error: 'Erro ao adicionar pet' });
    }
});

// Exporta o roteador para ser utilizado em outros arquivos
module.exports = router;
