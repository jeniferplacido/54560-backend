const passport = require('passport');
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');

// Função para extrair o token JWT dos cookies da requisição
const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['token']; // Extrai o token da propriedade 'token' dos cookies da requisição
    }
    return token; // Retorna o token extraído ou null se não existir
};

// Função para inicializar a configuração do passport
const initializePassport = () => {
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: 'coderSecret'
    }, async (jwt_payload, done) => {
        try {
            // Aqui você poderia consultar o banco de dados para buscar o usuário com base no ID presente no JWT
            // Como estamos usando usuários simulados, não é necessário realizar essa consulta
            // Apenas decodificamos o payload do JWT e passamos o usuário simulado correspondente ao ID
            const user = { id: jwt_payload.id, email: jwt_payload.email, role: jwt_payload.role };

            // Verifica se o usuário foi encontrado
            if (!user) {
                return done(null, false); // Retorna que o usuário não foi encontrado
            }

            return done(null, user); // Retorna o usuário autenticado com sucesso
        } catch (error) {
            return done(error); // Retorna um erro caso ocorra algum problema na busca do usuário
        }
    }));
};

// Middleware de autorização
const authorization = (role) => {
    return async (req, res, next) => {
        if (!req.user) return res.status(401).send('Unauthorized');
        if (role && role !== req.user.role) return res.status(403).send('Forbidden');
        next();
    };
};

// Exporta a função de inicialização do passport e o middleware de autorização
module.exports = { initializePassport, authorization };
