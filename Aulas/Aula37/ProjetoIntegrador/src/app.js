const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const handlebars = require('express-handlebars');
const connection = require('./config/db');
const cookieParser = require('cookie-parser');


const app = express();

connection();

app.use(cookieParser());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


const authRoutes = require('./routes/authRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const carrinhoRoutes = require('./routes/carrinhoRoutes');

app.use('/', produtoRoutes);
app.use('/auth', authRoutes);
app.use('/', carrinhoRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
