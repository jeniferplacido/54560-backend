// Importando o módulo 'express' para criar um aplicativo Express
const express = require('express');
const app = express();
const server = app.listen(8080, () => console.log('Escuta na PORTA 8080')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let users = [];
app.post('/api/user', (req, res) => {
       let user = req.body;

    if (!user.first_name || !user.last_name) {
            return res.status(400).send({ status: "error", error: 'Valores Incompletos' });
    }

        users.push(user);

        res.send({ status: "success", message: "Usuário adicionado com sucesso" });
}); 
