const express = require('express');
const addLogger = require('./utils/logger.js'); // ajuste o caminho conforme necessário
const app = express();

app.use(addLogger);

app.get('/teste', (req, res) => {
    req.logger.warn('Hello World!');
  res.send('Hello World! Hello Coders!');
});

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
