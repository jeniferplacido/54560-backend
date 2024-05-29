// Importa o modelo de Usuario
const Usuario = require('../models/Usuario');

// Define a classe UsuarioDAO
class UsuarioDAO {
    // Define a função estática para listar todos os usuários
    static async listarUsuarios() {
        // Retorna todos os usuários encontrados
        return await Usuario.find();
    }

    // Define a função estática para buscar um usuário pelo ID
    static async buscarUsuarioPorId(id) {
        // Retorna o usuário encontrado pelo ID
        return await Usuario.findById(id);
    }

    // Define a função estática para criar um usuário
    static async criarUsuario(usuario) {
        // Retorna o usuário criado
        return await Usuario.create(usuario);
    }

    // Define a função estática para atualizar um usuário
    static async atualizarUsuario(id, usuarioAtualizado) {
        // Retorna o usuário atualizado
        return await Usuario.findByIdAndUpdate(id, usuarioAtualizado, { new: true });
    }

    // Define a função estática para deletar um usuário
    static async deletarUsuario(id) {
        // Retorna o usuário deletado
        return await Usuario.findByIdAndDelete(id);
    }
}

// Exporta a classe UsuarioDAO
module.exports = UsuarioDAO;