// Importa o módulo 'express' para criar o servidor web
const express = require('express');

// Importa o módulo 'express-handlebars' para usar o Handlebars como template engine
const handlebars = require('express-handlebars');

// Importa o módulo 'utils.js' para obter o diretório base do projeto
const _dirname = require('./utils');

// Cria uma instância do aplicativo Express
const app = express();

// Configura o Handlebars como template engine
app.engine('handlebars', handlebars.engine());

// Define o diretório onde estão os templates Handlebars
app.set('views', _dirname + '/views');

// Define o template engine a ser usado (no caso, Handlebars)
app.set('view engine', 'handlebars');

// Configura o servidor para servir arquivos estáticos na pasta 'public' (CSS, JS, imagens, etc.)
app.use(express.static(_dirname + '/public'));

// Define uma rota para a raiz do servidor ('/')
app.get('/', (req, res) => {
    // Define um array de objetos 'usuarios' com informações (nome e sobrenome)
    const users = [
        {
            name: 'Jeni',
            last_name: 'Placido',
            age: 24,
            email: 'jenifer@example.com',
            phone: '123456789'
        },
        {
            name: 'Alice',
            last_name: 'Silva',
            age: 30,
            email: 'alice@example.com',
            phone: '123-456-7890'
        },
        {
            name: 'Bob',
            last_name: 'Santos',
            age: 25,
            email: 'bob@example.com',
            phone: '987-654-3210'
        },
        {
            name: 'Carol',
            last_name: 'Oliveira',
            age: 35,
            email: 'carol@example.com',
            phone: '111-222-3333'
        },
        {
            name: 'David',
            last_name: 'Silveira',
            age: 28,
            email: 'david@example.com',
            phone: '444-555-6666'
        },
        {
            name: 'Eva',
            last_name: 'Menezes',
            age: 40,
            email: 'eva@example.com',
            phone: '777-888-9999'
        }
    ];

    // Calcula um número aleatório entre 0 e o tamanho do array 'users' - 1
    const randomIndex = Math.floor(Math.random() * users.length);
    // Acessa o elemento do array 'users' no índice aleatório gerado anteriormente e armazena esse usuário na variável 'randomUser'
    const randomUser = users[randomIndex];

    // Renderiza o template 'user.handlebars' e passa o usuário selecionado para o template
    res.render('users', { user: randomUser }); // Usamos a chave 'user' para corresponder ao nome da variável no template
});

// Inicia o servidor na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
