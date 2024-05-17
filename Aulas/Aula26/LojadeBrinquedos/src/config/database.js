const mongoose = require('mongoose');

require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;


const connection = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Conectado com sucesso ao MongoDB!');
    } catch (error) {
        console.log('Erro ao conectar ao MongoDB');
        console.error(error);
        process.exit(1);
    }
}

module.exports = connection