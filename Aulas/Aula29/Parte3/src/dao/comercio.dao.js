// Importa o modelo de Comercio
const Comercio = require('../models/Comercio');

// Define a classe ComercioDAO
class ComercioDAO {
    // Define a função estática para listar todos os comércios
    static async listarComercios() {
        // Retorna todos os comércios encontrados
        return await Comercio.find();
    }

    // Define a função estática para buscar um comércio pelo ID
    static async buscarComercioPorId(id) {
        // Retorna o comércio encontrado pelo ID
        return await Comercio.findById(id);
    }

    // Define a função estática para criar um comércio
    static async criarComercio(comercio) {
        // Retorna o comércio criado
        return await Comercio.create(comercio);
    }

    // Define a função estática para atualizar um comércio
    static async atualizarComercio(id, comercioAtualizado) {
        // Retorna o comércio atualizado
        return await Comercio.findByIdAndUpdate(id, comercioAtualizado, { new: true });
    }

    // Define a função estática para deletar um comércio
    static async deletarComercio(id) {
        // Retorna o comércio deletado
        return await Comercio.findByIdAndDelete(id);
    }
}

// Exporta a classe ComercioDAO
module.exports = ComercioDAO;