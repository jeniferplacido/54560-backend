const mongoose = require('mongoose'); // Importa o Mongoose para criar esquemas e modelos no MongoDB
const mongoosePaginate = require('mongoose-paginate-v2'); // Importa o plugin mongoose-paginate-v2 para paginação

// Define um esquema para o modelo de carrinho (Carrinho)
const carrinhoSchema = new mongoose.Schema({
    itens: [{ // Define um campo 'itens' que é um array de objetos
        produtoId: { // Define um campo 'produtoId' que é uma referência ao modelo 'Produto' por meio de ObjectId
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produto' // Indica que 'produtoId' referencia o modelo 'Produto'
        },
        quantidade: { // Define um campo 'quantidade' que é um número e é obrigatório, com valor padrão de 1 se não fornecido
            type: Number,
            required: true,
            default: 1
        }
    }],
    total: { // Define um campo 'total' que é um número e é obrigatório, com valor padrão de 0 se não fornecido
        type: Number,
        required: true,
        default: 0
    }
});

// Adiciona o plugin de paginação ao esquema do carrinho
carrinhoSchema.plugin(mongoosePaginate);

// Cria o modelo 'Carrinho' com base no esquema 'carrinhoSchema'
const Carrinho = mongoose.model('Carrinho', carrinhoSchema);

// Exporta o modelo 'Carrinho' para uso em outros arquivos
module.exports = Carrinho;
