const express = require('express');
const userRouter = require('./routes/user');
const errorHandler = require('./middlewares/errors/index');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use(errorHandler);

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
})
