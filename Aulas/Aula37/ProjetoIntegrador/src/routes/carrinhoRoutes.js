const express = require('express');
const router = express.Router();
const authMiddleware = require('../utils/authMiddleware');
const carrinhoController = require('../controllers/carrinhoController');

router.post('/carrinho/add', authMiddleware, carrinhoController.addCarrinho);
router.get('/carrinho/:usuarioId', authMiddleware, carrinhoController.getCarrinho);
router.delete('/carrinho/:usuarioId/:produtoId', authMiddleware, carrinhoController.removeCarrinho);

module.exports = router;
