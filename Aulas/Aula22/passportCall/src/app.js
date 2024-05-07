const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const { initializePassport, authorization } = require('./config/passport.config');
const passportCall = require('./utils');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.static(__dirname + '/public')); // Serve arquivos estáticos na pasta 'public'
app.use(express.json()); // Habilita o uso do formato JSON nas requisições
app.use(passport.initialize()); // Inicializa o Passport para autenticação

initializePassport(); // Inicializa a configuração do Passport para JWT
authorization(); // Middleware de autorização

app.use(bodyParser.urlencoded({ extended: false })); // Habilita o uso do body-parser para requisições URL encoded
app.use(bodyParser.json()); // Habilita o uso do body-parser para JSON
app.use(cookieParser()); // Habilita o uso do cookie-parser

// Usuários simulados (apenas para fins de teste, não são salvos em banco de dados)
const users = [
    { email: 'jeni@email.com', senha: '123', role: 'user' },
    { email: 'j@email.com', senha: '123', role: 'admin' }
];

// Rota para exibir o formulário de login
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html'); // Envia o arquivo HTML de login
});

// Rota para autenticar o usuário e gerar o token JWT
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
        // Consulta ao array de usuários simulados para obter o usuário pelo email
        const user = users.find(usuario => usuario.email === email);
        console.log('Usuário encontrado:', user); // Verifique se o usuário foi encontrado

        if (!user) {
            return res.status(401).send('Credenciais inválidas: usuário não encontrado');
        }

        console.log('Senha digitada:', senha);
        console.log('Senha cadastrada:', user.senha);

        // Comparar a senha digitada com a senha armazenada no usuário simulado
        if (senha !== user.senha) {
            return res.status(401).send('Credenciais inválidas: senha incorreta');
        }

        // Gerar token de acesso
        let token = jwt.sign({ id: user.id, email: user.email, role: user.role }, 'coderSecret', { expiresIn: '15m' });
        // Definir cookie com o token
        res.cookie('token', token); 
        res.send('Login bem-sucedido');
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota protegida que usa autenticação JWT
app.get('/current', passportCall('jwt'), (req, res) => {
    try {
        // Aqui você pode acessar o usuário autenticado a partir do req.user
        const usuarioReq = req.user;
        if (!usuarioReq) {
            return res.status(401).send('Usuário não autenticado');
        }

        // Consulta ao array de usuários simulados para obter o usuário pelo email
        const user = users.find(usuario => usuario.email === usuarioReq.email);

        if (!user) {
            return res.status(404).send('Usuário não encontrado');
        }

        // Verificar a autorização do usuário
        if (user.role !== 'admin') {
            return res.status(403).send('Acesso não autorizado');
        }

        res.send(user);
    } catch (error) {
        console.error('Erro ao acessar usuário atual:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Inicia o servidor na porta 8080
app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080`);
});
