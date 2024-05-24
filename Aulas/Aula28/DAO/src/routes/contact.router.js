// Importa o módulo Express
const Router = require('express');

// Importa a classe Contacts do arquivo '../model/contatos'
const Contacts = require('../model/contatos');

// Cria um novo roteador Express
const router = Router();

// Cria uma nova instância da classe Contacts
// Esta instância será usada para interagir com a coleção de contatos no MongoDB
const contactsService = new Contacts();

// Define uma rota GET para '/'
// Quando essa rota é acessada, ela busca todos os contatos usando o método get da instância contactsService de Contacts
// Em seguida, ela envia uma resposta com o status "sucess", os contatos encontrados como payload e uma mensagem de sucesso
router.get('/', async (req, res) => {
    let result = await contactsService.get();
    res.send({status:"sucess", payload:result, message:"Operação realizada com sucesso"});
});

// Exporta o roteador para que ele possa ser usado em outros módulos
module.exports = router;