// Importando o módulo 'express' para criar um aplicativo Express
const express = require('express');

// Criando uma instância do aplicativo Express
const app = express();

// Iniciando o servidor na porta 8080 e exibindo uma mensagem de escuta
const server = app.listen(8080, () => console.log('Escuta na PORTA 8080')); 

// Configurando o middleware para lidar com dados em formato JSON
app.use(express.json());

// Configurando o middleware para lidar com dados codificados em URL
app.use(express.urlencoded({ extended: true }));

// Definindo um array vazio para armazenar usuários
let users = [];

// Rota para atualizar um usuário existente com o método PUT
app.put('/api/user/:id', (req, res) => {
    // Capturando os dados do usuário enviados pelo cliente no corpo da requisição
    let user = req.body;

    // Verificando se os dados obrigatórios do usuário (nome e sobrenome) foram fornecidos
    if (!user.first_name || !user.last_name) {
        // Retornando um código de status 400 (Bad Request) e uma mensagem de erro se os dados estiverem incompletos
        return res.status(400).send({ status: "error", error: 'Valores chaves não enviados' });
    }

    // Atualizando os dados do usuário no array de usuários
    users = users.map(obj => {
        if (obj.first_name === user.first_name && obj.last_name === user.last_name) {
            return { ...user }; // Se o usuário existir, atualiza seus dados
        }
        return { ...obj }; // Caso contrário, mantém os dados inalterados
    });

    // Respondendo ao cliente com um código de status 200 (OK) e uma mensagem de sucesso
    res.send({ status: "success", message: "Usuário atualizado com sucesso" });
});

// Rota para adicionar um novo usuário com o método POST
app.post('/api/user', (req, res) => {
    // Capturando os dados do usuário enviados pelo cliente no corpo da requisição
    let user = req.body;

    // Verificando se os dados obrigatórios do usuário (nome e sobrenome) foram fornecidos
    if (!user.first_name || !user.last_name) {
        // Retornando um código de status 400 (Bad Request) e uma mensagem de erro se os dados estiverem incompletos
        return res.status(400).send({ status: "error", error: 'Valores Incompletos' });
    }

    // Adicionando o usuário ao array de usuários
    users.push(user);

    // Respondendo ao cliente com um código de status 200 (OK) e uma mensagem de sucesso
    res.send({ status: "success", message: "Usuário adicionado com sucesso" });
}); 

app.delete('/api/user/:name', (req, res) => {
    let name = req.params.name;
   let currentLength = users.length;

   users = users.filter(users => users.first_name !== name);
   if(users.length === currentLength){
       return res.status(400).send({status: "error", error: "Usuário não encontrado"});
   }
   res.send({status: "success", message: "Usuário deletado com sucesso"});
});