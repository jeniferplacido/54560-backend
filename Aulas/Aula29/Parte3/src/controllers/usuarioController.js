// Importa o DAO de usuário
const UsuarioDAO = require('../dao/usuario.dao');

// Define a função para obter todos os usuários
const getUsuarios = async (req, res) => {
    try {
        // Chama a função listarUsuarios do DAO de usuário
        const usuarios = await UsuarioDAO.listarUsuarios();
        // Envia a resposta com o status "success" e a lista de usuários
        res.send({ status: "success", result: usuarios });
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função para obter um usuário pelo ID
const getUsuarioById = async (req, res) => {
    // Extrai o ID dos parâmetros da requisição
    const { id } = req.params;
    try {
        // Chama a função buscarUsuarioPorId do DAO de usuário com o ID
        const usuario = await UsuarioDAO.buscarUsuarioPorId(id);
        // Se o usuário existir, envia a resposta com o status "success" e o usuário
        // Se não, envia a resposta com o status "error" e a mensagem "Usuário não encontrado"
        if (usuario) {
            res.send({ status: "success", result: usuario });
        } else {
            res.status(404).send({ status: "error", message: "Usuário não encontrado" });
        }
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Define a função para criar um usuário
const criarUsuario = async (req, res) => {
    // Extrai o usuário do corpo da requisição
    const usuario = req.body;
    try {
        // Chama a função criarUsuario do DAO de usuário com o usuário
        const novoUsuario = await UsuarioDAO.criarUsuario(usuario);
        // Envia a resposta com o status "success" e o novo usuário
        res.send({ status: "success", result: novoUsuario });
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(400).send({ status: "error", message: error.message });
    }
};

// Define a função para atualizar um usuário
const atualizarUsuario = async (req, res) => {
    // Extrai o ID dos parâmetros da requisição e o usuário atualizado do corpo da requisição
    const { id } = req.params;
    const usuarioAtualizado = req.body;
    try {
        // Chama a função atualizarUsuario do DAO de usuário com o ID e o usuário atualizado
        const usuario = await UsuarioDAO.atualizarUsuario(id, usuarioAtualizado);
        // Se o usuário foi atualizado, envia a resposta com o status "success" e o usuário atualizado
        // Se não, envia a resposta com o status "error" e a mensagem "Usuário não encontrado"
        if (usuario) {
            res.send({ status: "success", result: usuario });
        } else {
            res.status(404).send({ status: "error", message: "Usuário não encontrado" });
        }
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(400).send({ status: "error", message: error.message });
    }
};

// Define a função para deletar um usuário
const deletarUsuario = async (req, res) => {
    // Extrai o ID dos parâmetros da requisição
    const { id } = req.params;
    try {
        // Chama a função deletarUsuario do DAO de usuário com o ID
        const usuario = await UsuarioDAO.deletarUsuario(id);
        // Se o usuário foi deletado, envia a resposta com o status "success" e a mensagem "Usuário deletado com sucesso"
        // Se não, envia a resposta com o status "error" e a mensagem "Usuário não encontrado"
        if (usuario) {
            res.send({ status: "success", message: "Usuário deletado com sucesso" });
        } else {
            res.status(404).send({ status: "error", message: "Usuário não encontrado" });
        }
    } catch (error) {
        // Em caso de erro, envia a resposta com o status "error" e a mensagem de erro
        res.status(500).send({ status: "error", message: error.message });
    }
};

// Exporta as funções
module.exports = { getUsuarios, getUsuarioById, criarUsuario, atualizarUsuario, deletarUsuario };