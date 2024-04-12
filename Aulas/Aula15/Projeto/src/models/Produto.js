// models/Produto.js
const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  descricao: String,
  categoria: {
    type: String,
    enum: ['eletronicos', 'vestuario', 'livros', 'alimentos']
  },
  disponivel: {
    type: Boolean,
    default: true
  }
}, {
  collection: 'produtos' // Não deve estar dentro do esquema, mas sim como segundo argumento do Schema
});

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
