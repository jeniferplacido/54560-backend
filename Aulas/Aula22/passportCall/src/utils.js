// Importa o módulo 'passport'
const passport = require('passport');

// Função para criar um middleware personalizado para autenticação
const passportCall = (strategy) => {
    return async (req, res, next) => {
        // Chama o método 'authenticate' do Passport para autenticar usando a estratégia especificada
        passport.authenticate(strategy, (error, user, info) => {
            if (error) return next(error); // Se houver erro, repassa o erro para o próximo middleware

            if (!user) { // Se o usuário não for autenticado com sucesso
                return res.status(401).send({ // Retorna status 401 (Não autorizado) e uma mensagem de erro
                    error: info.messages ? info.messages : info.toString() // Verifica se há mensagens de erro, senão converte para string
                });
            }
            req.user = user; // Adiciona o usuário autenticado ao objeto de requisição (req)
            next(); // Passa para o próximo middleware ou rota
        })(req, res, next); // Chama o middleware de autenticação do Passport com os argumentos req, res e next
    };
};

// Exporta a função passportCall para ser utilizada em outros arquivos
module.exports = passportCall;
