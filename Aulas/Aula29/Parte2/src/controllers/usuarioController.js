// Importa o módulo UsuarioDAO
const UsuarioDAO = require('../dao/usuario.dao');

// Define a função assíncrona getUsuarios
// Esta função retorna todos os usuários
// Em caso de sucesso, retorna os usuários com o status 200
// Em caso de erro, retorna uma mensagem de erro com o status 500
const getUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioDAO.listarUsuarios();
        res.send({ status: "success", result: usuarios });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função assíncrona getUsuarioById
// Esta função retorna o usuário com o ID especificado
// Em caso de sucesso, retorna o usuário com o status 200
// Se o usuário não for encontrado, retorna uma mensagem de erro com o status 404
// Em caso de outro erro, retorna uma mensagem de erro com o status 500
const getUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await UsuarioDAO.buscarUsuarioPorId(id);
        if (usuario) {
            res.send({ status: "success", result: usuario });
        } else {
            res.status(404).send({ status: "error", message: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função assíncrona criarUsuario
// Esta função cria um novo usuário com os dados do corpo da requisição
// Em caso de sucesso, retorna o usuário criado com o status 200
// Em caso de erro, retorna uma mensagem de erro com o status 400
const criarUsuario = async (req, res) => {
    const usuario = req.body;
    try {
        const novoUsuario = await UsuarioDAO.criarUsuario(usuario);
        res.send({ status: "success", result: novoUsuario });
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message });
    }
};

// Define a função assíncrona atualizarUsuario
// Esta função atualiza o usuário com o ID e os dados especificados
// Em caso de sucesso, retorna o usuário atualizado com o status 200
// Se o usuário não for encontrado, retorna uma mensagem de erro com o status 404
// Em caso de outro erro, retorna uma mensagem de erro com o status 400
const atualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const usuarioAtualizado = req.body;
    try {
        const usuario = await UsuarioDAO.atualizarUsuario(id, usuarioAtualizado);
        if (usuario) {
            res.send({ status: "success", result: usuario });
        } else {
            res.status(404).send({ status: "error", message: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(400).send({ status: "error", message: error.message });
    }
};

// Define a função assíncrona deletarUsuario
// Esta função exclui o usuário com o ID especificado
// Em caso de sucesso, retorna uma mensagem de sucesso com o status 200
// Se o usuário não for encontrado, retorna uma mensagem de erro com o status 404
// Em caso de outro erro, retorna uma mensagem de erro com o status 500
const deletarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await UsuarioDAO.deletarUsuario(id);
        if (usuario) {
            res.send({ status: "success", message: "Usuário deletado com sucesso" });
        } else {
            res.status(404).send({ status: "error", message: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Exporta as funções para que possam ser usadas em outros módulos
module.exports = { getUsuarios, getUsuarioById, criarUsuario, atualizarUsuario, deletarUsuario };