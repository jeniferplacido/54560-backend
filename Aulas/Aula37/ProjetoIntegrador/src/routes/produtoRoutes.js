// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/produtos', produtoController.getProdutos);

module.exports = router;
