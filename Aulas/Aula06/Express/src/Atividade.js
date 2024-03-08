const express = require('express');
const app = express();

// Array de objetos do tipo usuário
const usuarios = [
    { id: 1, nome: 'Jeni', sobrenome: 'Placido', idade: 33 },
    { id: 2, nome: 'Gui', sobrenome: 'Silva', idade: 18 }
];

// Rota para obter todos os usuários
app.get('/', (req, res) => {
    res.send(usuarios);
});

// Rota para obter um usuário pelo ID
app.get('/:userId', (req, res) => {
    let userId = req.params.userId;
    let usuario = usuarios.find(user => user.id === +userId); //o sinal de + converte a string para número
    if (!usuario) return res.send({error: 'Usuário não encontrado'});
    res.send(usuario);
    }
);

// Inicia o servidor na porta definida
app.listen(8080, () => {
    console.log(`Servidor Express está rodando na porta 8080`);
});
