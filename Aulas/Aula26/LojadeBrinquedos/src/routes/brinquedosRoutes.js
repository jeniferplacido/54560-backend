// inicializa o express
const express = require('express');
// inicializa o router
const router = express.Router();
// importa o controller
const BrinquedosController = require('../controllers/brinquedosController');
// instanciando o controller
const brinquedosController = new BrinquedosController();

// rota para listar os brinquedos (método bind para chamar o controller)
router.get('/', brinquedosController.listarBrinquedos.bind(brinquedosController));

// rota para adicionar um novo brinquedo (método bind para chamar o controller)
router.post('/', brinquedosController.adicionarBrinquedo.bind(brinquedosController));

module.exports = router;
