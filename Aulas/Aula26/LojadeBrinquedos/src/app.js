const express = require('express');
const bodyParser = require('body-parser');
const brinquedosRoutes = require('./routes/brinquedosRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const connection = require('./config/database');



const app = express();
const PORT = process.env.PORT;

connection();

app.use(bodyParser.json());
app.use('/brinquedos', brinquedosRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na port:${PORT}`);
});
