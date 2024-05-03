// config/passport.config.js
const passport = require('passport');
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['token'];
    }
    return token;
};

const initializePassport = () => {
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: 'coderSecret' // Substitua pela sua chave secreta real
    }, async (jwt_payload, done) => {
        try {
            // Simula a busca do usuário no banco de dados
            const user = usersDB.find(u => u.id === jwt_payload.id);
            if (!user) {
                return done(null, false); // Usuário não encontrado
            }
            return done(null, user); // Usuário autenticado com sucesso
        } catch (error) {
            return done(error);
        }
    }));
};

// const authorization = (role) =>{
//     return async (req, res, next) => {
//         if(!req.user) return rest.status(401).send('Unauthorized');
//         if(role && role !== req.user.role) return rest.status(403).send('Forbidden');
//         next();
//     }
// }

module.exports = initializePassport;
