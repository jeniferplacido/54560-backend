const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Sucesso ao conectar ao MongoDB');
    } catch (err) {
        console.error('Falha ao conectar ao MongoDB', err);
        process.exit(1);
    }
};

module.exports = connection;
