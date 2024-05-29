// Importa o módulo express
const express = require('express');
// Cria um novo roteador
const router = express.Router();
// Importa o controlador de usuários
const usuarioController = require('../controllers/usuarioController');

// Define a rota para criar um novo usuário
router.post('/', usuarioController.criarUsuario);
// Define a rota para obter todos os usuários
router.get('/', usuarioController.getUsuarios);
// Define a rota para obter um usuário pelo ID
router.get('/:id', usuarioController.getUsuarioById);
// Define a rota para atualizar um usuário
router.put('/:id', usuarioController.atualizarUsuario);

// Exporta o roteador
module.exports = router;