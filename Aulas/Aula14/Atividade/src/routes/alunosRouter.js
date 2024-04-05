const express = require('express');
const alunosModel = require('../models/alunos.model');

const router = express.Router();

// Define uma rota GET para a raiz do roteador ('/api/users/')
router.get('/', async (req, res) => {
   try {
    let alunos = await alunosModel.find();
    res.send({ result: 'success', payload: alunos });
   } catch (error) {
       console.log("Cannot get users com mongoose: " + error);
       res.status(500).json({ error: 'Erro ao buscar usuários' });
   }
});

// Define uma rota POST para a raiz do roteador ('/api/users/')
router.post('/', async (req, res) => {
    try {
        let { nome, sobrenome, idade, dni, curso, nota, email } = req.body;
        if (!nome || !sobrenome || !idade || !dni || !curso || !nota || !email) {
            return res.status(400).json({ status: 'error', error: 'Dados faltando' });
        }
        let result = await usersModel.create({ nome, sobrenome, idade, dni, curso, nota, email });
        res.status(201).json({ status: 'success, Aluno adicionado com sucesso', payload: result });
        
    } catch (error) {
        console.log("Erro ao adicionar usuário com mongoose: " + error);
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
});

// Define uma rota PUT para atualizar um usuário pelo ID ('/api/users/:id')
router.put('/:id', async (req, res) => {
    try {
        let { id } = req.params; // Corrigido para pegar o parâmetro de rota correto 'id'
        let { nome, sobrenome, idade, dni, curso, nota, email } = req.body;

        let alunoToUpdate = await alunosModel.findById(id);
        if (!alunoToUpdate) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        alunoToUpdate.nome = nome || userToUpdate.nome;
        alunoToUpdateSobrenome = sobrenome || userToUpdateSobrenome;
        alunoToUpdateIdade = idade || userToUpdateIdade;
        alunoToUpdateDni = dni || userToUpdateDni;
        alunoToUpdateCurso = curso || userToUpdateCurso;
        alunoToUpdateNota = nota || userToUpdateNota;

        let updatedAluno = await alunoToUpdate.save();
        res.status(200).json({ status: 'success', payload: updatedAluno });
        
    } catch (error) {
        console.log("Erro ao atualizar aluno com mongoose: " + error);
        res.status(500).json({ error: 'Erro ao atualizar aluno' });
    }
});

// Exporta o roteador para ser utilizado em outros arquivos
module.exports = router;
