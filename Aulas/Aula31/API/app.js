const express = require('express');

const app = express();

app.use('/api/users', require('./routes/user'))


app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
})