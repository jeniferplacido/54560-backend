const express = require('express');
const router = express.Router();

const brinquedosController = require('../controllers/brinquedosController');

router.get('/', brinquedosController.getBrinquedos);
router.get('/:id', brinquedosController.getBrinquedoById);
router.post('/', brinquedosController.createBrinquedo);
router.put('/:id', brinquedosController.updateBrinquedo);
router.delete('/:id', brinquedosController.deleteBrinquedo);

module.exports = router;