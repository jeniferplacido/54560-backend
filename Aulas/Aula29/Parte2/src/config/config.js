// Importando a biblioteca dotenv, que permite carregar variáveis de ambiente de um arquivo .env para o programa
const dotenv = require('dotenv');

// O método dotenv.config() é normalmente usado para carregar as variáveis de ambiente do arquivo .env
 dotenv.config();

// As linhas abaixo são usadas para configurar variáveis de ambiente
port = process.env.PORT,
mongoUrl = process.env.MONGO_URL,


// Exportando as variáveis de ambiente para serem usadas em outros arquivos
module.exports = { port, mongoUrl }
