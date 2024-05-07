const express = require('express');  // Importa o módulo 'express' para criar o servidor web
const router = express.Router();  // Cria um router para manipular as rotas relacionadas aos animais de estimação

// Simulação de uma matriz de animais de estimação
let pets = [];

// Rota para inserir um novo animal de estimação
router.post('/', (req, res) => {
    const { nome, especie } = req.body;  // Extrai o nome e a espécie do corpo da requisição
    if (!nome || !especie) {  // Verifica se o nome e a espécie foram fornecidos na requisição
        res.status(400).send('Nome e espécie são obrigatórios');  // Retorna um erro 400 se não forem fornecidos
    } else {
        // Adicionar o novo animal de estimação à matriz
        pets.push({ nome, especie, adotado: false });  // Adiciona o novo animal à matriz 'pets'
        res.status(201).send('Animal de estimação adicionado com sucesso');  // Retorna uma mensagem de sucesso com código 201
    }
});

// Rota para obter um animal de estimação pelo nome
router.get('/:pet([a-zA-Z ]+)', (req, res) => {
    const petNome = req.params.pet;  // Obtém o nome do animal de estimação a partir dos parâmetros da URL
    // Verificar se o nome do animal de estimação recebido corresponde à expressão regular
    if (petNome) {
        // Procurar o animal de estimação na matriz pelo nome
        const pet = pets.find(pet => pet.nome === petNome);  // Procura o animal na matriz 'pets' pelo nome
        if (pet) {
            res.send(pet);  // Retorna o animal de estimação se encontrado
        } else {
            res.status(404).send('Animal de estimação não encontrado');  // Retorna um erro 404 se o animal não for encontrado
        }
    } else {
        res.status(400).send('Nome do animal de estimação inválido');  // Retorna um erro 400 se o nome do animal for inválido
    }
});

// Rota para adotar um animal de estimação pelo nome
router.put('/:pet([a-zA-Z ]+)', (req, res) => {
    const petNome = req.params.pet;  // Obtém o nome do animal de estimação a partir dos parâmetros da URL
    // Procurar o animal de estimação na matriz pelo nome
    const pet = pets.find(pet => pet.nome === petNome);  // Procura o animal na matriz 'pets' pelo nome
    if (pet) {
        pet.adotado = true;  // Define o status 'adotado' do animal como verdadeiro
        res.send('Animal de estimação adotado com sucesso');  // Retorna uma mensagem de sucesso
    } else {
        res.status(404).send('Animal de estimação não encontrado');  // Retorna um erro 404 se o animal não for encontrado
    }
});

module.exports = router;  // Exporta o router para ser utilizado em outros módulos
