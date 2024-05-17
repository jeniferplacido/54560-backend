// Importa o modelo de brinquedo
const Brinquedo = require('../model/Brinquedos');

// Cria um service para o brinquedo
class BrinquedosService {
  async listarBrinquedos() {
    try {
      // Busca todos os brinquedos
      const brinquedos = await Brinquedo.find();
      return brinquedos;
    } catch (err) {
      throw new Error('Erro ao listar brinquedos.');
    }
  }

  // Adiciona um novo brinquedo
  async adicionarBrinquedo(brinquedoData) {
    try {
        // Cria um novo brinquedo
      const novoBrinquedo = await Brinquedo.create(brinquedoData);
      return novoBrinquedo;
    } catch (err) {
      throw new Error('Erro ao adicionar brinquedo.');
    }
  }
}
// Exporta o service
module.exports = BrinquedosService;
