const mongoose = require('mongoose');

const CarrinhoSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  produtos: [
    {
      produtoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
      },
      quantidade: {
        type: Number,
        required: true,
        default: 1
      }
    }
  ]
});

module.exports = mongoose.model('Carrinho', CarrinhoSchema);
