// Importa o módulo express
const express = require('express');
// Cria um novo roteador
const router = express.Router();
// Importa o controlador de pedidos
const pedidoController = require('../controllers/pedidoController');

// Define a rota para criar um novo pedido
router.post('/', pedidoController.criarPedido);
// Define a rota para obter todos os pedidos
router.get('/', pedidoController.obterPedidos);
// Define a rota para obter um pedido pelo ID
router.get('/:id', pedidoController.obterPedidoPorId);
// Define a rota para atualizar um pedido
router.put('/:id', pedidoController.atualizarPedido);

// Exporta o roteador
module.exports = router;