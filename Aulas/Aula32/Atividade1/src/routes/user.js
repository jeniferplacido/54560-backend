// Importa o módulo Router do Express, que é usado para criar rotas HTTP.
const Router = require('express').Router;

// Importa o módulo CustomError, que é provavelmente uma classe personalizada para erros.
const CustomError = require('../services/errors/CustomError');

// Importa o módulo 'enums', que provavelmente contém constantes para diferentes tipos de erros.
const enums = require('../services/errors/enums');

// Importa a função 'generateUserErrorInfo' do módulo 'info' no diretório 'services/errors'.
const {generateUserErrorInfo} = require('../services/errors/info');

// Cria um array vazio chamado 'users'. Este array provavelmente será usado para armazenar usuários.
const users = [];

// Cria um novo roteador Express.
const router = Router();

// Define uma rota GET para a raiz '/'. Quando um cliente faz uma requisição GET para essa rota, 
//a função de callback é chamada.
router.get('/', (req, res) => {
    // Envia uma resposta HTTP com o status 'sucess' e o payload sendo o array 'users'.
    res.send({status:'sucess', payload: users})
})

// Define uma rota POST para a raiz '/'. Quando um cliente faz uma requisição POST para essa rota, 
//a função de callback é chamada.
router.post('/', (req, res, next) => {
    // Extrai 'name', 'lastName' e 'email' do corpo da requisição HTTP.
    const {name, lastName, email} = req.body;

    // Se 'name', 'lastName' ou 'email' não estiverem presentes, 
    //cria um novo erro e passa para o próximo middleware.
    if(!name || !lastName || !email){
        const error = CustomError.createError({
            name:'Erro criação de usuário',
            cause: generateUserErrorInfo(name, lastName, email),
            message: 'Um ou mais campos obrigatórios não foram preenchidos',
            code: enums.INVALID_TYPES_ERROR
        });
        return next(error);
    }

    // Cria um novo usuário com 'name', 'lastName' e 'email'.
    const user = {
        name,
        lastName,
        email
    }

    // Se o array 'users' estiver vazio, define o id do usuário como 1. Caso contrário, define o id do usuário como o id do último usuário no array 'users' mais 1.
    if(users.length===0){
        user.id=1;
    }else{
        user.id=users[users.length-1].id+1;
    }

    // Adiciona o usuário ao array 'users'.
    users.push(user)

    // Envia uma resposta HTTP com o status 'sucess', o payload sendo o usuário e o id do usuário.
    res.send({status:'sucess', payload: user, id: user.id})
})

// Exporta o roteador.
module.exports = router;