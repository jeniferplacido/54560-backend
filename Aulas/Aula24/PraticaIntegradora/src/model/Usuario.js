// Importações necessárias
const mongoose = require('mongoose'); // Mongoose é uma biblioteca para modelagem de dados MongoDB
const bcrypt = require('bcrypt'); // Biblioteca para criptografar senhas
const mongoosePaginate = require('mongoose-paginate-v2'); // Plugin para paginação em consultas MongoDB
const Schema = mongoose.Schema; // Abreviação para facilitar o uso do Schema do Mongoose

// Definição do Schema para o modelo Usuario
const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true }, // Nome do usuário (obrigatório)
    sobrenome: { type: String, required: true }, // Sobrenome do usuário (obrigatório)
    email: { type: String, required: true, unique: true }, // Email do usuário (obrigatório e único)
    idade: { type: Number }, // Idade do usuário (opcional)
    senha: { type: String, required: true }, // Senha do usuário (obrigatória)
    carrinho: { type: Schema.Types.ObjectId, ref: 'Carrinho' }, // Referência ao modelo Carrinho
    role: { type: String, default: 'user' } // Papel do usuário, padrão é 'user'
});

// Função que é executada antes de salvar um novo usuário
usuarioSchema.pre('save', async function (next) {
    // Verifica se a senha foi modificada
    if (!this.isModified('senha')) {
        return next();
    }
    // Criptografa a senha usando bcrypt com uma força de 10 (custo de processamento)
    const hashedPassword = await bcrypt.hash(this.senha, 10);
    this.senha = hashedPassword; // Substitui a senha original pela senha criptografada
    next(); // Continua com o processo de salvamento
});

// Método personalizado para verificar se a senha fornecida corresponde à senha criptografada do usuário
usuarioSchema.methods.checkPassword = async function (senha) {
    return await bcrypt.compare(senha, this.senha);
};

// Aplica o plugin de paginação ao Schema do usuário
usuarioSchema.plugin(mongoosePaginate);

// Cria o modelo Usuario com base no Schema definido
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Exporta o modelo Usuario para uso em outros arquivos
module.exports = Usuario;
