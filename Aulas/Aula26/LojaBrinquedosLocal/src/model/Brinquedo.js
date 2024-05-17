const fs = require('fs');
const path = require('path');
const brinquedoPath = path.join(__dirname, '../data/brinquedos.json');

const readBrinquedos = () => {
    try {
        const data = fs.readFileSync(brinquedoPath, 'utf8');
        if (data) {
            return JSON.parse(data);
        }
        return [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

const writeBrinquedos = (data) => {
    fs.writeFileSync(brinquedoPath, JSON.stringify(data, null, 2));
};

const getBrinquedos = () => {
    return readBrinquedos();
};

const getBrinquedoById = (id) => {
    const brinquedos = readBrinquedos();
    return brinquedos.find((brinquedo) => brinquedo.id === id);
};

const createBrinquedo = (newBrinquedo) => {
    const brinquedos = readBrinquedos();
    newBrinquedo.id = (brinquedos.length + 1).toString(); // Simple ID generation
    brinquedos.push(newBrinquedo);
    writeBrinquedos(brinquedos);
    return newBrinquedo;
};

const updateBrinquedo = (id, updatedBrinquedo) => {
    const brinquedos = readBrinquedos();
    const index = brinquedos.findIndex((brinquedo) => brinquedo.id === id);
    if (index !== -1) {
        brinquedos[index] = { ...brinquedos[index], ...updatedBrinquedo };
        writeBrinquedos(brinquedos);
        return brinquedos[index];
    }
    return null;
};

const deleteBrinquedo = (id) => {
    const brinquedos = readBrinquedos();
    const index = brinquedos.findIndex((brinquedo) => brinquedo.id === id);
    if (index !== -1) {
        const deletedBrinquedo = brinquedos.splice(index, 1);
        writeBrinquedos(brinquedos);
        return deletedBrinquedo[0];
    }
    return null;
};

module.exports = {
    getBrinquedos,
    getBrinquedoById,
    createBrinquedo,
    updateBrinquedo,
    deleteBrinquedo,
};
