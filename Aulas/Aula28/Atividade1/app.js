const express = require('express');
const bodyParser = require('body-parser');
const MemoryDAO = require('./dao/memoryDAO');
const MongoDAO = require('./dao/mongoDAO');
const createContactRoutes = require('./routes/contatosRoutes');

const app = express();
app.use(bodyParser.json());

// const memoryDAO = new MemoryDAO();
 const mongoDAO = new MongoDAO();

// Initialize memory DAO with two contacts
// (async () => {
//     await memoryDAO.create({ nome: 'Jeni', email: 'jeni@email.com' });
//     await memoryDAO.create({ nome: 'Jeni Jeni', email: 'jenijeni@email.com'});
// })();


//const currentDAO = memoryDAO;
const currentDAO = mongoDAO;

app.use('/api', createContactRoutes(currentDAO));


app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080`);
});
