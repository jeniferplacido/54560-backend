// Importando o módulo passport e a estratégia de autenticação local
const passport = require('passport');
const local = require('passport-local');

// Importando o modelo de usuário e as funções de validação de senha e criação de hash
const User = require('../model/User');
const { isValidPassword, createHash } = require('../utils');

// Função para inicializar o passport e configurar a estratégia de autenticação local
const initializePassport = () => {
    // Configuração da estratégia local do passport
    passport.use('local', new local.Strategy((username, password, done) => {
        try {
            // Busca o usuário no banco de dados pelo email fornecido
            const user = User.findOne({ email: username });

            // Se o usuário não existir, retorna false
            if (!user) {
                console.error('Usuário não encontrado para o email:', username);
                return done(null, false);
            }

            // Verifica se a senha fornecida corresponde à senha do usuário
            if (!isValidPassword(username, password)) {
                console.error('Senha inválida para o usuário:', username);
                return done(null, user); // Retorna o usuário mesmo com senha inválida (será tratado posteriormente)
            }
        } catch (error) {
            console.error('Erro ao verificar a senha:', error);
            return done(error);
        }
    }));

    // Função para serializar o usuário para armazenamento na sessão
    passport.serializeUser((user, done) => {
        done(null, user._id); // Serializa o ID do usuário na sessão
    })

    // Função para desserializar o usuário a partir do ID armazenado na sessão
    passport.deserializeUser(async (id, done) => {
        let user = await User.findById(id); // Busca o usuário no banco de dados pelo ID
        done(null, user); // Passa o usuário encontrado para a próxima etapa
    })
}

// Exporta a função para inicialização do passport
module.exports = initializePassport;
