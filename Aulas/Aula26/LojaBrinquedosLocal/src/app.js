const express = require('express');
const bodyParser = require('body-parser');
const brinquedosRouter = require('./routes/brinquedosRouter');
const usuariosRouter = require('./routes/usuariosRouter');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/brinquedos', brinquedosRouter);
app.use('/usuarios', usuariosRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta:${PORT}`);
})