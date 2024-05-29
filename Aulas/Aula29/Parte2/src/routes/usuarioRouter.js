// Importa o módulo express
const express = require('express');
// Cria um novo roteador express
const router = express.Router();
// Importa o controlador de usuários
const usuarioController = require('../controllers/usuarioController');

// Define a rota POST para a raiz ('/') do roteador
// Quando uma solicitação POST é feita para a raiz do roteador, a função criarUsuario do controlador de usuários é chamada
router.post('/', usuarioController.criarUsuario);

// Define a rota GET para a raiz ('/') do roteador
// Quando uma solicitação GET é feita para a raiz do roteador, a função getUsuarios do controlador de usuários é chamada
router.get('/', usuarioController.getUsuarios);

// Define a rota GET para '/:id' do roteador
// Quando uma solicitação GET é feita para '/:id', a função getUsuarioById do controlador de usuários é chamada
router.get('/:id', usuarioController.getUsuarioById);

// Define a rota PUT para '/:id' do roteador
// Quando uma solicitação PUT é feita para '/:id', a função atualizarUsuario do controlador de usuários é chamada
router.put('/:id', usuarioController.atualizarUsuario);

// Exporta o roteador para que possa ser usado em outros módulos
module.exports = router;