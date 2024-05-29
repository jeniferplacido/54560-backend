// Importa o módulo express
const express = require('express');

// Cria um novo roteador express
const router = express.Router();

// Importa o controlador de comércio
const comercioController = require('../controllers/comercioController');

// Define a rota GET para a raiz ('/') do roteador
// Quando uma solicitação GET é feita para a raiz do roteador, a função getComercios do controlador de comércio é chamada
router.get('/', comercioController.getComercios);

// Define a rota POST para a raiz ('/') do roteador
// Quando uma solicitação POST é feita para a raiz do roteador, a função criarComercio do controlador de comércio é chamada
router.post('/', comercioController.criarComercio);

// Define a rota GET para '/:id' do roteador
// Quando uma solicitação GET é feita para '/:id', a função getComercioById do controlador de comércio é chamada
router.get('/:id', comercioController.getComercioById);

// Define a rota PUT para '/:id' do roteador
// Quando uma solicitação PUT é feita para '/:id', a função atualizarComercio do controlador de comércio é chamada
router.put('/:id', comercioController.atualizarComercio);

// Exporta o roteador para que possa ser usado em outros módulos
module.exports = router;