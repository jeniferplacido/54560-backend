const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Simulação de um banco de dados de usuários
const usersDB = [
    { id: 1, email: 'jeni@email.com', senha: '123' },
    { id: 2, email: 'jenifer@email.com', senha: '456' },
];

// Rota para exibir o formulário de login
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Rota para lidar com o processo de login e definição do cookie
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    // Encontrar o usuário pelo email
    const user = usersDB.find(u => u.email === email);
    if (!user) {
        return res.status(401).send('Usuário não encontrado');
    }
    // Comparar a senha
    if (user.senha !== senha) {
        return res.status(401).send('Senha inválida');
    }
    // Gerar token (simplificado para este exemplo)
    const token = 'coderToken';
    // Definir cookie com o token
    res.cookie('token', token); // 15 minutos de expiração
    res.send('Login bem-sucedido');
});

app.listen(8080, () => {
    console.log(`Servidor rodando em 8080`);
});
