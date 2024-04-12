const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const db = require('./utils/db');
const app = express();

// Criar uma instância do Handlebars
const handle= handlebars.create({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
});

// Configurar Handlebars como template engine
app.engine('handlebars', handle.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configurar rotas
const viewRouter = require('./routes/view.router');
app.use('/', viewRouter);

// Configurar pasta estática
app.use(express.static('public'));

// Porta do servidor
app.listen(8080, () => {
  console.log(`Servidor rodando na porta 8080`);
});
