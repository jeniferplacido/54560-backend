// Importa o módulo 'passport' para autenticação
const passport = require('passport');

// Importa o módulo 'Strategy' e 'ExtractJwt' do 'passport-jwt' para usar JWT (JSON Web Tokens) na autenticação
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
    // Define uma estratégia de autenticação chamada 'jwt' utilizando JWTStrategy
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]), // Define como extrair o JWT da requisição (neste caso, dos cookies)
        secretOrKey: 'coderSecret' // Chave secreta utilizada para assinar e verificar os tokens JWT
    }, async (jwt_payload, done) => { // Função de verificação do token JWT
        try {
            // Simula a busca do usuário no banco de dados com base no ID presente no JWT
            const user = user.find(u => u.id === jwt_payload.id);

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

const authorization = (role) =>{
    return async (req, res, next) => {
        if(!req.user) return res.status(401).send('Unauthorized');
        if(role && role !== req.user.role) return res.status(403).send('Forbidden');
        next();
    }
}

// Exporta a função de inicialização do passport para ser utilizada em outros arquivos
module.exports = {initializePassport, authorization};
