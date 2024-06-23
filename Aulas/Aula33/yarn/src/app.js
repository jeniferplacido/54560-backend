const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));