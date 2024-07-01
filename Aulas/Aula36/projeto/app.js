const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const connection = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Configurar Handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conectar ao MongoDB
connection();

// Rotas
app.use('/', usuarioRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
