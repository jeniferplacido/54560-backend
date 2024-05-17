// importa o modelo de usuario
const Usuario = require('../model/Usuario');

// Cria um service para o usuario
class UsuariosService {
  async listarUsuarios() {
    try {
      // Busca todos os usuarios
      const usuarios = await Usuario.find();
      return usuarios;
    } catch (err) {
      throw new Error('Erro ao listar usuários.');
    }
  }
// Adiciona um novo usuário
  async adicionarUsuario(usuarioData) {
    try {
        // Cria um novo usuário
      const novoUsuario = await Usuario.create(usuarioData);
      return novoUsuario;
    } catch (err) {
      throw new Error('Erro ao adicionar usuário.');
    }
  }
}
// Exporta o service
module.exports = UsuariosService;
