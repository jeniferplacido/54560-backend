const mongoose = require('mongoose');

// Definindo o esquema do Mongoose para Pedido
const produtoPedidoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }
});

const pedidoSchema = new mongoose.Schema({
    numeroOrdem: {
        type: String,
        required: true,
        unique: true
    },
    comercio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comercio',
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    produtos: [produtoPedidoSchema]
});

// Criando e exportando o modelo do Mongoose
const Pedido = mongoose.model('Pedido', pedidoSchema);
module.exports = Pedido;
