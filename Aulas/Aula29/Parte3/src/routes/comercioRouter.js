// Importa o módulo express
const express = require('express');
// Cria um novo roteador
const router = express.Router();
// Importa o controlador de comércio
const comercioController = require('../controllers/comercioController');

// Define a rota para obter todos os comércios
router.get('/', comercioController.getComercios);
// Define a rota para criar um novo comércio
router.post('/', comercioController.criarComercio);
// Define a rota para obter um comércio pelo ID
router.get('/:id', comercioController.getComercioById);
// Define a rota para atualizar um comércio
router.put('/:id', comercioController.atualizarComercio);

// Exporta o roteador
module.exports = router;