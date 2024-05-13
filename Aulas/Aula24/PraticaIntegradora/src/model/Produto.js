const mongoose = require('mongoose'); // Importa o Mongoose para criar esquemas e modelos no MongoDB
const mongoosePaginate = require('mongoose-paginate-v2'); // Importa o plugin mongoose-paginate-v2 para paginação

// Define um esquema para o modelo de produto (Produto)
const produtoSchema = new mongoose.Schema({
    nome: { // Define um campo 'nome' que é uma string e é obrigatório
        type: String,
        required: true
    },
    descricao: { // Define um campo 'descricao' que é uma string e é obrigatório
        type: String,
        required: true
    },
    preco: { // Define um campo 'preco' que é um número e é obrigatório
        type: Number,
        required: true
    }
});

// Adiciona o plugin de paginação ao esquema do produto
produtoSchema.plugin(mongoosePaginate);

// Cria o modelo 'Produto' com base no esquema 'produtoSchema'
const Produto = mongoose.model('Produto', produtoSchema);

// Exporta o modelo 'Produto' para uso em outros arquivos
module.exports = Produto;
