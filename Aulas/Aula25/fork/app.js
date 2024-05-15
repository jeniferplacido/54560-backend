const express = require('express');

const app = express();

app.get('/sum', (req, res) => {
    const childProcess = fork('./complexOperation.js');
    child.send('Inicie o calculo por favor');
    child.on('message', result => {
        res.send(`O resultado da operação é: ${result}`);
  })
})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
})