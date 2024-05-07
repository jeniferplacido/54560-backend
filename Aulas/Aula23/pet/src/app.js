const express = require('express');
const router = require('./routes/router.pet');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', router);

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
