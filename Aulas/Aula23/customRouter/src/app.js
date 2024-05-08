const express = require('express'); // Importa o módulo express

const userRouter = require('./routes/users'); // Importa o router personalizado para usuários
const app = express(); // Cria uma instância do aplicativo Express

const usersRouter = new userRouter(); // Cria uma instância do router personalizado para usuários

app.use('/', usersRouter.getRouter()); // Define o uso do router personalizado no aplicativo Express

app.listen(8080, () => console.log('Servidor rodando na porta 8080')); // Inicia o servidor na porta 8080
