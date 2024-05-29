// Importa o módulo express
const express = require('express');
// Cria um novo roteador express
const router = express.Router();
// Importa o controlador de pedidos
const pedidoController = require('../controllers/pedidoController');

// Define a rota POST para a raiz ('/') do roteador
// Quando uma solicitação POST é feita para a raiz do roteador, a função criarPedido do controlador de pedidos é chamada
router.post('/', pedidoController.criarPedido);

// Define a rota GET para a raiz ('/') do roteador
// Quando uma solicitação GET é feita para a raiz do roteador, a função obterPedidos do controlador de pedidos é chamada
router.get('/', pedidoController.obterPedidos);

// Define a rota GET para '/:id' do roteador
// Quando uma solicitação GET é feita para '/:id', a função obterPedidoPorId do controlador de pedidos é chamada
router.get('/:id', pedidoController.obterPedidoPorId);

// Define a rota PUT para '/:id' do roteador
// Quando uma solicitação PUT é feita para '/:id', a função atualizarPedido do controlador de pedidos é chamada
router.put('/:id', pedidoController.atualizarPedido);

// Exporta o roteador para que possa ser usado em outros módulos
module.exports = router;