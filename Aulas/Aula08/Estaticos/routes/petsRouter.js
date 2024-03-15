const express = require('express'); // Importa o módulo Express
const router = express.Router(); // Cria um novo roteador Express

// Configura o roteador para interpretar solicitações com formato JSON
router.use(express.json());

// Configura o roteador para interpretar solicitações com dados codificados no formato URL (como os formulários HTML)
router.use(express.urlencoded({ extended: true }));

let pets = []; // Cria uma array vazia para armazenar os animais de estimação

// Rota para manipular solicitações GET para a raiz (/api/pets)
router.get('/', (req, res) => {
    res.json(pets); // Retorna a lista de animais de estimação em formato JSON
});

// Rota para manipular solicitações POST para a raiz (/api/pets)
router.post('/', (req, res) => {
    const newPet = req.body; // Obtém os dados do novo animal de estimação enviados no corpo da solicitação

    // Verifica se o objeto contém as propriedades 'name' e 'raca' preenchidas
    if (newPet.name && newPet.raca) {
        pets.push(newPet); // Adiciona o novo animal de estimação à array
        console.log(pets); // Exibe os dados da array no console para verificar se foram adicionados corretamente
        res.status(201).send('Pet adicionado com sucesso!'); // Responde com código 201 (Created) e uma mensagem de sucesso
    } else {
        res.status(400).send('Nome e raça do pet são obrigatórios!'); // Responde com código 400 (Bad Request) e uma mensagem de erro caso não sejam fornecidas as informações obrigatórias
    }
});

module.exports = router; // Exporta o roteador para ser utilizado em outras partes da aplicação
