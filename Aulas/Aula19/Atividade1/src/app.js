const express = require('express');
const sessionConfig = require('./model/sessionConfig');
const cookieParser = require('cookie-parser');
const viewRouter = require('./routes/view.router');
const session = require('express-session');


const app = express();

app.use(cookieParser());
app.use(session(sessionConfig));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', viewRouter);

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});