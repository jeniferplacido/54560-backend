// Importa o mongoose para lidar com operações no banco de dados MongoDB
const mongoose = require('mongoose')

// Define uma função assíncrona chamada 'connection' para estabelecer a conexão com o banco de dados
const connection = async () => {
    try {
        // Tenta estabelecer a conexão com o banco de dados MongoDB hospedado no MongoDB Atlas
        await mongoose.connect('mongodb+srv://jeni:<password>@ecom.rfyehda.mongodb.net/', {
           
        })

        // Se a conexão for bem-sucedida, exibe uma mensagem no console informando o host do banco de dados
        console.log(`Conectado com sucesso ao MongoDb: ${mongoose.connection.host}`)
    } catch (error) {
        // Se houver algum erro durante a conexão, exibe uma mensagem de erro no console
        console.error(`Erro de conexão ao MongoDb: ${error.message}`)
        // Encerra o processo Node.js com status de erro (1)
        process.exit(1)
    }
}

// Exporta a função 'connection' para que possa ser usada em outros arquivos
module.exports = connection;
