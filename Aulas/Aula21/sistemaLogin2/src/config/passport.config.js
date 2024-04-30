const GitHubStrategy = require('passport-github2').Strategy; // Importa a estratégia de autenticação do GitHub do Passport.js
const passport = require('passport'); // Importa o Passport.js para lidar com autenticação de usuários
const User = require('../model/User'); // Importa o modelo de usuário

// Função para inicializar o Passport.js e configurar a estratégia de autenticação do GitHub
const initializePassport = () => {
    passport.use('github', new GitHubStrategy({
        clientID: 'seu_id_Aqui', // ID do cliente fornecido pelo GitHub OAuth
        clientSecret: 'seu_client_secret', // Chave secreta do cliente fornecida pelo GitHub OAuth
        callbackURL: 'http://localhost:8080/api/sessions/githubcallback' // URL de retorno após autenticação pelo GitHub
    }, async (accessToken, refreshToken, profile, done) => {
        // Aqui está o seu callback de verificação (verify callback)
        try {
            // Procura pelo usuário no banco de dados usando o e-mail do perfil retornado pelo GitHub
            let user = await User.findOne({ email: profile._json.email });
            if (!user) {
                // Se o usuário não existe, cria um novo usuário com dados do perfil do GitHub
                let newUser = {
                    primeiro_nome: profile._json.name, // Primeiro nome do usuário
                    segundo_nome: '', // Sobrenome do usuário (não fornecido pelo GitHub neste caso)
                    idade: 34, // Idade do usuário (exemplo)
                    email: profile._json.email, // E-mail do usuário
                    senha: '' // Senha (pode ser definida mais tarde ou usando outro método)
                }
                let result = await User.create(newUser); // Cria o novo usuário no banco de dados
                done(null, result); // Retorna o novo usuário para o Passport.js
            } else {
                // Se o usuário já existe, retorna o usuário existente para o Passport.js
                done(null, user);
            }
        } catch (error) {
            // Em caso de erro durante a verificação, passa o erro para o Passport.js
            done(error);
        }
    }));

    // Função para serializar o usuário para armazenamento na sessão
    passport.serializeUser((user, done) => {
        done(null, user._id); // Serializa o ID do usuário na sessão
    });

    // Função para desserializar o usuário a partir do ID armazenado na sessão
    passport.deserializeUser(async (id, done) => {
        let user = await User.findById(id); // Busca o usuário no banco de dados pelo ID
        done(null, user); // Passa o usuário encontrado para a próxima etapa
    });
};

module.exports = initializePassport; // Exporta a função para inicialização do Passport.js
