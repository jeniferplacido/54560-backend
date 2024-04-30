// Importando o módulo bcrypt para criptografia de senhas
const bcrypt = require('bcrypt');

// Importando o modelo de usuário
const User = require('./model/User');

// Função para criar hash de senha
const createHash = (password) => {
    // bcrypt.genSaltSync(10) gera um salt aleatório com fator de custo 10
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

// Função para validar senha
const isValidPassword = async (email, password) => {
    try {
        // Busca o usuário no banco de dados pelo email fornecido
        const user = await User.findOne({ email });
        if (!user) {
            console.error('Usuário não encontrado para o email:', email);
            return false; // Usuário não encontrado
        }
        // Verifica se a senha fornecida corresponde ao hash armazenado no banco de dados
        return bcrypt.compareSync(password, user.senha);
    } catch (error) {
        console.error('Erro ao verificar a senha:', error);
        return false;
    }
}

// Configuração da estratégia de autenticação local para o registro

// Exportando as funções necessárias para uso em outros arquivos
module.exports = { createHash, isValidPassword };
