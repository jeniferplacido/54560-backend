const brinquedoService = require('../services/brinquedoService');

const getBrinquedos = async (req, res) => {
    const brinquedos = await brinquedoService.getBrinquedos();
    res.json(brinquedos);
}

const getBrinquedoById = async (req, res) => {
    const brinquedo = await brinquedoService.getBrinquedoById(req.params.id);
    if (brinquedo) {
        res.json(brinquedo);
    }else{
        res.status(404).json({ message: 'Brinquedo não encontrado' });
        res.send('Brinquedo não encontrado');
    }
}

const createBrinquedo = async (req, res) => {
    const brinquedo = await brinquedoService.createBrinquedo(req.body);
    res.status(201).json(brinquedo);
}

const updateBrinquedo = async (req, res) => {
    const brinquedo = await brinquedoService.updateBrinquedo(req.params.id, req.body);
    if (brinquedo) {
        res.json(brinquedo);
    }else{
        res.status(404).json({ message: 'Brinquedo não encontrado' });
        res.send('Brinquedo não encontrado');
    }
}

const deleteBrinquedo = async (req, res) => {
    const brinquedo = await brinquedoService.deleteBrinquedo(req.params.id);
    if (brinquedo) {
        res.json(brinquedo);
    }else{
        res.status(404).json({ message: 'Brinquedo não encontrado' });
        res.send('Brinquedo não encontrado');
    }
}

module.exports = {
    getBrinquedos,
    getBrinquedoById,
    createBrinquedo,
    updateBrinquedo,
    deleteBrinquedo
}