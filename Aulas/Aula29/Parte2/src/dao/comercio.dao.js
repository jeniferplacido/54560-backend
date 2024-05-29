// Importa a classe Comercio do módulo '../models/Comercio'
const Comercio = require('../models/Comercio');

// Define a classe ComercioDAO
class ComercioDAO {
    // Define o método estático listarComercios
    // Este método retorna todos os comércios usando o método find da classe Comercio
    static async listarComercios() {
        return await Comercio.find();
    }

    // Define o método estático buscarComercioPorId
    // Este método retorna o comércio com o ID especificado usando o método findById da classe Comercio
    static async buscarComercioPorId(id) {
        return await Comercio.findById(id);
    }

    // Define o método estático criarComercio
    // Este método cria um novo comércio com os dados especificados usando o método create da classe Comercio
    static async criarComercio(comercio) {
        return await Comercio.create(comercio);
    }

    // Define o método estático atualizarComercio
    // Este método atualiza o comércio com o ID especificado com os dados atualizados especificados
    // O método findByIdAndUpdate da classe Comercio é usado para isso
    // A opção { new: true } é passada para retornar o comércio atualizado em vez do comércio original
    static async atualizarComercio(id, comercioAtualizado) {
        return await Comercio.findByIdAndUpdate(id, comercioAtualizado, { new: true });
    }

    // Define o método estático deletarComercio
    // Este método deleta o comércio com o ID especificado usando o método findByIdAndDelete da classe Comercio
    static async deletarComercio(id) {
        return await Comercio.findByIdAndDelete(id);
    }
}

// Exporta a classe ComercioDAO para que ela possa ser usada em outros módulos
module.exports = ComercioDAO;