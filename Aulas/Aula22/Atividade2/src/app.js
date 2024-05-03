// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const initializePassport = require('./config/passport.config');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(passport.initialize());

initializePassport();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Simulação de um usuário
const user = { id: 1, email: 'jeni@email.com', senha: '123' };

// Rota para exibir o formulário de login
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Rota para lidar com o processo de login e definição do cookie
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    // Comparar a senha
    if (user.email !== email || user.senha !== senha) {
        return res.status(401).send('Credenciais inválidas');
    }
    // Gerar token (simplificado para este exemplo)
    const token = 'coderToken';
    // Definir cookie com o token
    res.cookie('token', token); // 15 minutos de expiração
    res.send('Login bem-sucedido');
});

// Rota protegida que usa autenticação JWT
app.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send({ status: 'success', user: req.user });
});

app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080`);
});
