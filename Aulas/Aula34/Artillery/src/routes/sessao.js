const express = require('express');
const { registrarUsuario, logarUsuario } = require('../controllers/sessaoController');

const router = express.Router();

router.post('/registrar', registrarUsuario);
router.post('/login', logarUsuario);

module.exports = router;

