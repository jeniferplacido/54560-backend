// Importa o módulo express
const express = require('express');

// Cria um novo roteador express
const router = express.Router();

// Importa o controlador de pedidos
const pedidoController = require('../controllers/pedidoController');

// Define a rota POST para a raiz ('/') do roteador
// Quando uma solicitação POST é feita para a raiz do roteador, a função postPedido do controlador de pedidos é chamada
router.post('/', pedidoController.postPedido);

// Define a rota GET para a raiz ('/') do roteador
// Quando uma solicitação GET é feita para a raiz do roteador, a função getPedidos do controlador de pedidos é chamada
router.get('/', pedidoController.getPedidos);

// Define a rota GET para '/:id' do roteador
// Quando uma solicitação GET é feita para '/:id', a função getPedidoById do controlador de pedidos é chamada
router.get('/:id', pedidoController.getPedidoById);

// Define a rota PUT para '/:id' do roteador
// Quando uma solicitação PUT é feita para '/:id', a função putPedido do controlador de pedidos é chamada
router.put('/:id', pedidoController.putPedido);

// Exporta o roteador para que possa ser usado em outros módulos
module.exports = router;