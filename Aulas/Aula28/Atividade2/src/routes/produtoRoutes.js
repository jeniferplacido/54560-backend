// Importa o módulo express, que é um framework para construir aplicações web em Node.js
const express = require('express');

// Cria um novo roteador express
const router = express.Router();

// Importa a propriedade produtoRepository do módulo '../services'
// produtoRepository é uma instância da classe ProdutoRepository que foi criada no módulo '../services'
const { produtoRepository } = require('../services');

// Define uma rota GET para '/produtos'
// Quando uma requisição GET é feita para '/produtos', esta função assíncrona é chamada
router.get('/produtos', async (req, res) => {
    // Chama o método get de produtoRepository para obter os produtos
    // Como o método get é assíncrono, usamos a palavra-chave await para esperar pela resolução da promessa
    const produtos = await produtoRepository.get();

    // Envia os produtos como resposta em formato JSON
    res.json(produtos);
});

// Exporta o roteador para que ele possa ser usado em outros módulos
module.exports = router;
