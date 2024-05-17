// services/brinquedoService.js
const brinquedoPersistence = require('../model/Brinquedo');

const getAllBrinquedos = () => {
    return brinquedoPersistence.getBrinquedos();
};

const getBrinquedoById = (id) => {
    return brinquedoPersistence.getBrinquedoById(id);
};

const createBrinquedo = (brinquedo) => {
    return brinquedoPersistence.createBrinquedo(brinquedo);
};

const updateBrinquedo = (id, brinquedo) => {
    return brinquedoPersistence.updateBrinquedo(id, brinquedo);
};

const deleteBrinquedo = (id) => {
    return brinquedoPersistence.deleteBrinquedo(id);
};

module.exports = {
    getAllBrinquedos,
    getBrinquedoById,
    createBrinquedo,
    updateBrinquedo,
    deleteBrinquedo,
};
