// Importa o serviço de usuários a partir do arquivo 'usuarioService' localizado no diretório '../service'
const UsuarioService = require('../service/usuarioService');

// Cria uma nova instância do serviço de usuários
const usuariosService = new UsuarioService();

// Define a classe 'UsuariosController'
class UsuariosController {
  
  // Método assíncrono para listar os usuários
  async listarUsuarios(req, res) {
    try {
      // Tenta obter a lista de usuários chamando o método 'listarUsuarios' do serviço de usuários
      const usuarios = await usuariosService.listarUsuarios();
      // Envia a lista de usuários como resposta em formato JSON
      res.json(usuarios);
    } catch (err) {
      // Em caso de erro, envia uma resposta com status 500 (erro interno do servidor) e a mensagem de erro
      res.status(500).json({ error: err.message });
    }
  }

  // Método assíncrono para adicionar um novo usuário
  async adicionarUsuario(req, res) {
    // Extrai os dados 'nome', 'sobrenome', 'email' e 'senha' do corpo da requisição (dados enviados pelo cliente)
    const { nome, sobrenome, email, senha } = req.body;
    try {
      // Tenta adicionar um novo usuário chamando o método 'adicionarUsuario' do serviço de usuários
      const novoUsuario = await usuariosService.adicionarUsuario({ nome, sobrenome, email, senha });
      // Envia o novo usuário adicionado como resposta em formato JSON e com status 201 (criado)
      res.status(201).json(novoUsuario);
    } catch (err) {
      // Em caso de erro, envia uma resposta com status 500 (erro interno do servidor) e a mensagem de erro
      res.status(500).json({ error: err.message });
    }
  }
}

// Exporta a classe 'UsuariosController' para que possa ser usada em outros arquivos
module.exports = UsuariosController;
