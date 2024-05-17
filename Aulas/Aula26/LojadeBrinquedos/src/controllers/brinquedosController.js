// Importa o serviço de brinquedos a partir do arquivo 'brinquedoService' localizado no diretório '../service'
const BrinquedosService = require('../service/brinquedoService');

// Cria uma nova instância do serviço de brinquedos
const brinquedosService = new BrinquedosService();

// Define a classe 'BrinquedosController'
class BrinquedosController {
  
  // Método assíncrono para listar os brinquedos
  async listarBrinquedos(req, res) {
    try {
      // Tenta obter a lista de brinquedos chamando o método 'listarBrinquedos' do serviço de brinquedos
      const brinquedos = await brinquedosService.listarBrinquedos();
      // Envia a lista de brinquedos como resposta em formato JSON
      res.json(brinquedos);
    } catch (err) {
      // Em caso de erro, envia uma resposta com status 500 (erro interno do servidor) e a mensagem de erro
      res.status(500).json({ error: err.message });
    }
  }

  // Método assíncrono para adicionar um novo brinquedo
  async adicionarBrinquedo(req, res) {
    // Extrai os dados 'nome' e 'preco' do corpo da requisição (dados enviados pelo cliente)
    const { nome, preco } = req.body;
    try {
      // Tenta adicionar um novo brinquedo chamando o método 'adicionarBrinquedo' do serviço de brinquedos
      const novoBrinquedo = await brinquedosService.adicionarBrinquedo({ nome, preco });
      // Envia o novo brinquedo adicionado como resposta em formato JSON e com status 201 (criado)
      res.status(201).json(novoBrinquedo);
    } catch (err) {
      // Em caso de erro, envia uma resposta com status 500 (erro interno do servidor) e a mensagem de erro
      res.status(500).json({ error: err.message });
    }
  }
}

// Exporta a classe 'BrinquedosController' para que possa ser usada em outros arquivos
module.exports = BrinquedosController;
