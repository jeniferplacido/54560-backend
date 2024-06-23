const express = require('express');

app = express();

app.get('/teste', (req, res) => {
    res.send('Hello World! Hello Coders!');
  });

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));