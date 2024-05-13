const mongoose = require('mongoose'); // Importa o Mongoose para criar esquemas e modelos no MongoDB
const bcrypt = require('bcrypt'); // Importa o bcrypt para criptografar senhas

// Define um esquema para o modelo de administrador (Admin)
const adminSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true // Indica que o campo 'nome' é obrigatório
    },
    sobrenome: {
        type: String,
        required: true // Indica que o campo 'sobrenome' é obrigatório
    },
    email: {
        type: String,
        required: true,
        unique: true // Indica que o campo 'email' é obrigatório e único (não pode ser repetido)
    },
    senha: {
        type: String,
        required: true // Indica que o campo 'senha' é obrigatório
    }
});

// Middleware que é executado antes de salvar um novo documento de administrador
adminSchema.pre('save', async function (next) {
    if (!this.isModified('senha')) {
        return next(); // Se a senha não foi modificada, avança para o próximo middleware
    }
    const hashedPassword = await bcrypt.hash(this.senha, 10); // Criptografa a senha com bcrypt
    this.senha = hashedPassword; // Define a senha criptografada no documento
    next(); // Avança para o próximo middleware
});

// Método personalizado para verificar se a senha fornecida corresponde à senha criptografada do administrador
adminSchema.methods.checkPassword = async function (senha) {
    return await bcrypt.compare(senha, this.senha); // Compara a senha fornecida com a senha criptografada
}

// Cria o modelo 'Admin' com base no esquema 'adminSchema'
const Admin = mongoose.model('Admin', adminSchema);

// Exporta o modelo 'Admin' para uso em outros arquivos
module.exports = Admin;
