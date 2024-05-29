// Importa o modelo Comercio
const Comercio = require('../models/Comercio');

// Array que armazena os comércios
let comercios = [];

// Função que retorna todos os comércios
const getComercios = async (req, res) => {
    res.send({ status: "success", result: comercios });
};

// Função que cria um novo comércio com os dados do corpo da requisição
// Em seguida, adiciona o novo comércio ao array de comércios
// Finalmente, retorna o novo comércio
const postComercio = async (req, res) => {
    const { id, nome, produtos } = req.body;
    const novoComercio = new Comercio(id, nome, produtos);
    comercios.push(novoComercio);
    res.send({ status: "success", result: novoComercio });
};

// Função que retorna o comércio com o ID especificado
// Se o comércio não for encontrado, retorna uma mensagem de erro
const getComercioById = async (req, res) => {
    const { id } = req.params;
    const comercio = comercios.find(comercio => comercio.id == id);
    if (comercio) {
        res.send({ status: "success", result: comercio });
    } else {
        res.status(404).send({ status: "error", message: "Comércio não encontrado" });
    }
};

// Função que atualiza o comércio com o ID e os dados especificados
// Se o comércio não for encontrado, retorna uma mensagem de erro
const putComercio = async (req, res) => {
    const { id } = req.params;
    const { nome, produtos } = req.body;
    const comercio = comercios.find(comercio => comercio.id == id);
    if (comercio) {
        comercio.nome = nome;
        comercio.produtos = produtos;
        res.send({ status: "success", result: comercio });
    } else {
        res.status(404).send({ status: "error", message: "Comércio não encontrado" });
    }
};

// Exporta as funções para que possam ser usadas em outros módulos
module.exports = { getComercios, postComercio, getComercioById, putComercio };