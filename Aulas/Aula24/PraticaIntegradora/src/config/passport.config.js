// Importa o pacote 'passport' para lidar com autenticação de usuários
const passport = require('passport');
// Importa a estratégia do GitHub para autenticação de usuários via GitHub
const GitHubStrategy = require('passport-github2').Strategy;
// Importa os modelos de Usuário e Admin para interagir com o banco de dados
const Usuario = require('../model/Usuario');
const Admin = require('../model/Admin');
// Importa a estratégia local do passport para autenticação de usuários locais
const LocalStrategy = require('passport-local').Strategy;
// Importa a biblioteca 'jsonwebtoken' para gerar tokens JWT
const jwt = require('jsonwebtoken');
// Importa as estratégias JWT e ExtractJwt para autenticação via token JWT
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Carrega as variáveis de ambiente definidas no arquivo '.env'
require('dotenv').config();

// Define uma função chamada 'initializePassport' para configurar as estratégias de autenticação
const initializePassport = () => {
    // Exibe no console as variáveis de ambiente CLIENT_ID, CLIENT_SECRET e CALLBACK_URL
    console.log('CLIENT_ID:', process.env.CLIENT_ID);
    console.log('CLIENT_SECRET:', process.env.CLIENT_SECRET);
    console.log('CALLBACK_URL:', process.env.CALLBACK_URL);

    // Configura a estratégia de autenticação via GitHub
    passport.use(new GitHubStrategy({
        clientID: 'Iv23liggbuOOOPPBC6Ve', // ID do cliente do GitHub
        clientSecret: 'd192c489d849d579565b37ee08b1df684928e216', // Chave secreta do GitHub
        callbackURL: 'http://localhost:8080/auth/github/callback' // URL de retorno após autenticação do GitHub
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            // Procura pelo usuário no banco de dados com base no email do perfil do GitHub
            const user = await Usuario.findOne({ email: profile._json.email });
            if (user) {
                return done(null, user); // Retorna o usuário encontrado
            } else {
                // Se não encontrar, cria um novo usuário com base nos dados do perfil do GitHub
                const newUser = new Usuario({
                    nome: profile._json.name,
                    email: profile._json.email
                });
                await newUser.save(); // Salva o novo usuário no banco de dados
                return done(null, newUser); // Retorna o novo usuário criado
            }
        } catch (error) {
            return done(error); // Retorna um erro, se ocorrer algum problema durante a busca ou criação do usuário
        }
    }));

    // Configura a estratégia JWT para autenticação via token JWT
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrai o token JWT do cabeçalho de autenticação
        secretOrKey: 'coderSecret' // Chave secreta para assinar e verificar o token JWT
    }, async (jwtPayload, done) => {
        console.log('JWT Payload:', jwtPayload); // Exibe o payload do token JWT no console
        try {
            // Procura pelo usuário no banco de dados com base no ID do payload do token JWT
            const user = await Usuario.findById(jwtPayload.sub);
            if (user) {
                return done(null, user); // Retorna o usuário encontrado
            } else {
                return done(null, false); // Retorna falso se o usuário não for encontrado
            }
        } catch (error) {
            return done(error); // Retorna um erro, se ocorrer algum problema durante a busca do usuário
        }
    }));

    // Configura a estratégia local para autenticação de usuários locais (email e senha)
    passport.use('user', new LocalStrategy({
        usernameField: 'email', // Campo do formulário para o email do usuário
        passwordField: 'senha' // Campo do formulário para a senha do usuário
    }, async (email, senha, done) => {
        try {
            // Procura pelo usuário no banco de dados com base no email fornecido
            const user = await Usuario.findOne({ email });
            if (!user || !user.checkPassword(senha)) {
                // Retorna falso se o usuário não for encontrado ou a senha estiver incorreta
                return done(null, false, { message: 'Email ou senha inválidos' });
            }

            // Gera um token JWT para o usuário autenticado
            const payload = {
                sub: user._id, // ID do usuário
                email: user.email // Email do usuário
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Assina o token JWT com uma chave secreta e define um tempo de expiração
            console.log('Token payload:', payload); // Exibe o payload do token JWT no console
            const cookieOptions = {
                httpOnly: true, // Define o cookie como HTTP-Only para maior segurança
                expires: new Date(Date.now() + 1 * 60 * 60 * 1000) // Define o tempo de vida do cookie (1 hora)
            };
            // Define o token JWT como um cookie no cabeçalho da resposta HTTP
            req.res.cookie('token', token, cookieOptions);

            return done(null, user); // Retorna o usuário autenticado
        } catch (error) {
            return done(error); // Retorna um erro, se ocorrer algum problema durante a busca do usuário
        }
    }));

    // Configura a estratégia local para autenticação de administradores (email e senha)
    passport.use('admin', new LocalStrategy({
        usernameField: 'email', // Campo do formulário para o email do administrador
        passwordField: 'senha', // Campo do formulário para a senha do administrador
        passReqToCallback: true // Passa o objeto 'req' para a função de estratégia
    }, async (req, email, senha, done) => {
        try {
            // Procura pelo administrador no banco de dados com base no email fornecido
            const admin = await Admin.findOne({ email });
            if (!admin || !admin.checkPassword(senha)) {
                // Retorna falso se o administrador não for encontrado ou a senha estiver incorreta
                return done(null, false, { message: 'Email ou senha inválidos' });
            }
    
            // Gera um token JWT para o administrador autenticado
            const payload = {
                sub: admin._id, // ID do administrador
                email: admin.email, // Email do administrador
                role: 'admin' // Define o papel como administrador
            };
            const token = jwt.sign(payload, 'coderSecret', { expiresIn: '1h' }); // Assina o token JWT com uma chave secreta e define um tempo de expiração
    
            // Define o token JWT como um cookie no cabeçalho da resposta HTTP
            const cookieOptions = {
                httpOnly: true, // Define o cookie como HTTP-Only para maior segurança
                expires: new Date(Date.now() + 1 * 60 * 60 * 1000) // Define o tempo de vida do cookie (1 hora)
            };
            req.res.cookie('token', token, cookieOptions); // Define o token JWT como um cookie no cabeçalho da resposta HTTP
    
            return done(null, admin); // Retorna o administrador autenticado
        } catch (error) {
            return done(error); // Retorna um erro, se ocorrer algum problema durante a busca do administrador
        }
    }));
    
    // Serializa o usuário autenticado para armazenar na sessão
    passport.serializeUser((user, done) => {
        done(null, user._id); // Armazena apenas o ID do usuário na sessão
    });

    // Desserializa o usuário a partir do ID armazenado na sessão
    passport.deserializeUser(async (id, done) => {
        const user = await Usuario.findById(id); // Busca o usuário no banco de dados pelo ID
        done(null, user); // Retorna o usuário encontrado
    });
};

// Exporta a função 'initializePassport' para uso em outros arquivos
module.exports = initializePassport;
