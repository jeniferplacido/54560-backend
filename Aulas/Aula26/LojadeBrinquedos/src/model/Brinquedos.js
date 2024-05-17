const mongoose = require('mongoose');

// Cria um esquema para o brinquedo
const brinquedoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
});

// Cria um modelo para o brinquedo
const Brinquedo = mongoose.model('Brinquedo', brinquedoSchema);

// Exporta o modelo
module.exports = Brinquedo;
