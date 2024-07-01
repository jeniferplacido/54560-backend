const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.get('/criar-usuario', usuarioController.exibirFormularioCriarUsuario);
router.post('/usuarios', usuarioController.criarUsuario);
router.get('/gerar-usuarios', usuarioController.gerarUsuarios);

module.exports = router;
