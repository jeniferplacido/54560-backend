// Importa o módulo mongoose, que é uma ferramenta para conectar e trabalhar com MongoDB
const mongoose = require('mongoose');

// Obtém a URL do MongoDB a partir das variáveis de ambiente
const MONGODB_URL = process.env.MONGODB_URL;

// Define uma função assíncrona para conectar ao MongoDB
const connection = async () => {
    try {
        // Tenta conectar ao MongoDB usando a URL fornecida
        await mongoose.connect(MONGODB_URL);
        // Se a conexão for bem-sucedida, imprime uma mensagem de sucesso no console
        console.log('Conectado com sucesso ao MongoDB');
    } catch (error) {
        // Se ocorrer um erro durante a conexão, imprime o erro no console
        console.error('Erro ao conectar ao MongoDB:', error);
        // Encerra o processo com um código de status 1, que indica um erro
        process.exit(1);
    }
}

// Exporta a função de conexão para que possa ser usada em outros módulos
module.exports = connection;