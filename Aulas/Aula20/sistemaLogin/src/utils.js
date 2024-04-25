// Importando o módulo bcrypt para criptografia de senhas
const bcrypt = require('bcrypt');

// Importando o modelo de usuário que será usado para interagir com o banco de dados MongoDB
const User = require('./model/User');

// Função para criar hash de senha
const createHash = (password) => {
    // Gerando um hash síncrono usando a senha fornecida e um salt (valor aleatório) com custo 10
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

// Função para validar senha
const isValidPassword = async (email, password) => {
    try {
        // Buscando o usuário no banco de dados pelo email fornecido
        const user = await User.findOne({ email });

        // Se o usuário não existir, retornar false (usuário não encontrado)
        if (!user) {
            console.error('Usuário não encontrado para o email:', email);
            return false;
        }

        // Comparando a senha fornecida com o hash de senha armazenado no banco de dados
        // Usando bcrypt.compareSync para comparação síncrona
        return bcrypt.compareSync(password, user.senha);
    } catch (error) {
        console.error('Erro ao verificar a senha:', error);
        return false; // Em caso de erro, retornar false
    }
}

// Exportando as funções necessárias para serem usadas em outros arquivos
module.exports = { createHash, isValidPassword };
