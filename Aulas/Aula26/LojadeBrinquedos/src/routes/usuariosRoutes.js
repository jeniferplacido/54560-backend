const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuarioController');
const usuariosController = new UsuariosController();

router.get('/', usuariosController.listarUsuarios.bind(usuariosController));
router.post('/', usuariosController.adicionarUsuario.bind(usuariosController));

module.exports = router;
