const express = require('express');
const alunosModel = require('../models/users.model');

const router = express.Router();

// Define uma rota GET para a raiz do roteador ('/api/users/')
router.get('/', async (req, res) => {
   try {
    let users = await usersModel.find();
    res.send({ result: 'success', payload: users });
   } catch (error) {
       console.log("Cannot get users com mongoose: " + error);
       res.status(500).json({ error: 'Erro ao buscar usuários' });
   }
});

// Define uma rota POST para a raiz do roteador ('/api/users/')
router.post('/', async (req, res) => {
    try {
        let { first_name, last_name, email } = req.body;
        if (!first_name || !last_name || !email) {
            return res.status(400).json({ status: 'error', error: 'Dados faltando' });
        }
        let result = await usersModel.create({ first_name, last_name, email });
        res.status(201).json({ status: 'success', payload: result });
        
    } catch (error) {
        console.log("Erro ao adicionar usuário com mongoose: " + error);
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
});

// Define uma rota PUT para atualizar um usuário pelo ID ('/api/users/:id')
router.put('/:id', async (req, res) => {
    try {
        let { id } = req.params; // Corrigido para pegar o parâmetro de rota correto 'id'
        let { first_name, last_name, email } = req.body;

        let userToUpdate = await usersModel.findById(id);
        if (!userToUpdate) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        userToUpdate.first_name = first_name || userToUpdate.first_name;
        userToUpdate.last_name = last_name || userToUpdate.last_name;
        userToUpdate.email = email || userToUpdate.email;

        let updatedUser = await userToUpdate.save();
        res.status(200).json({ status: 'success', payload: updatedUser });
        
    } catch (error) {
        console.log("Erro ao atualizar usuário com mongoose: " + error);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

// Exporta o roteador para ser utilizado em outros arquivos
module.exports = router;
