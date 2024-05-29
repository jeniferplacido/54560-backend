// Importa o modelo Usuario
const Usuario = require('../models/Usuario');

// Define a classe UsuarioDAO
class UsuarioDAO {
    // Método para listar todos os usuários
    static async listarUsuarios() {
        // Retorna todos os usuários encontrados na base de dados
        return await Usuario.find();
    }

    // Método para buscar um usuário por ID
    static async buscarUsuarioPorId(id) {
        // Retorna o usuário com o ID especificado
        return await Usuario.findById(id);
    }

    // Método para criar um novo usuário
    static async criarUsuario(usuario) {
        // Cria um novo usuário na base de dados com os dados especificados e retorna o usuário criado
        return await Usuario.create(usuario);
    }

    // Método para atualizar um usuário
    static async atualizarUsuario(id, usuarioAtualizado) {
        // Atualiza o usuário com o ID especificado na base de dados com os novos dados e retorna o usuário atualizado
        return await Usuario.findByIdAndUpdate(id, usuarioAtualizado, { new: true });
    }

    // Método para deletar um usuário
    static async deletarUsuario(id) {
        // Deleta o usuário com o ID especificado da base de dados e retorna o usuário deletado
        return await Usuario.findByIdAndDelete(id);
    }
}

// Exporta a classe UsuarioDAO para que possa ser usada em outros módulos
module.exports = UsuarioDAO;