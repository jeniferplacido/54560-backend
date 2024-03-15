const express = require('express'); // Importa o módulo Express
const usersRouter = require('./routes/usersRouter'); // Importa o roteador de usuários
const petsRouter = require('./routes/petsRouter'); // Importa o roteador de animais de estimação

const app = express(); // Cria uma nova instância do aplicativo Express

app.use(express.json()); // Configura o aplicativo para interpretar solicitações com formato JSON
app.use(express.static(__dirname + '/public')); // Configura o aplicativo para servir arquivos estáticos (como HTML, CSS e JavaScript) a partir da pasta 'public'

// Define as rotas para manipular solicitações relacionadas a usuários e animais de estimação
app.use('/api/users', usersRouter); // Define o prefixo '/api/users' para todas as rotas relacionadas a usuários
app.use('/api/pets', petsRouter); // Define o prefixo '/api/pets' para todas as rotas relacionadas a animais de estimação

app.listen(8080, () => {
  console.log(`Servidor rodando na porta 8080`); // Inicia o servidor na porta 8080 e exibe uma mensagem de confirmação no console
});
