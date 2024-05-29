const mongoose = require('mongoose');

// Definindo o esquema do Mongoose para Comercio
const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
});

const comercioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    produtos: [produtoSchema]
});

// Criando e exportando o modelo do Mongoose
const Comercio = mongoose.model('Comercio', comercioSchema);

module.exports = Comercio;
