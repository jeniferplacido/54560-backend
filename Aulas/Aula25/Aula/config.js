// Importando a biblioteca dotenv, que permite carregar variáveis de ambiente de um arquivo .env para o programa
const dotenv = require('dotenv');

// O método dotenv.config() é normalmente usado para carregar as variáveis de ambiente do arquivo .env
 dotenv.config();

// As linhas abaixo são usadas para configurar variáveis de ambiente
// como PORT, MONGO_URL, ADMIN_NAME, e ADMIN_PASSWORD, definidas no arquivo .env
port = process.env.PORT,
mongoUrl = process.env.MONGO_URL,
adminName = process.env.ADMIN_NAME,
adminPassword = process.env.ADMIN_PASSWORD

// Exportando as variáveis de ambiente para serem usadas em outros arquivos
module.exports = { port, mongoUrl, adminName, adminPassword }







// Definindo a variável environment com o valor 'DEVELOPMENT'
//const environment = 'DEVELOPMENT';

// Carregando as variáveis de ambiente do arquivo .env.dev ou .env.prod, dependendo do valor de environment
// O método dotenv.config() é utilizado para isso, passando o caminho do arquivo como argumento
// dotenv.config({ path: environment === 'DEVELOPMENT' ? './.env.dev' : './.env.prod' });

// Atribuindo os valores das variáveis de ambiente a variáveis locais no programa
// Essas variáveis locais serão usadas no código em vez das variáveis de ambiente diretamente
// port = process.env.PORT,
// mongoUrl = process.env.MONGO_URL,
// adminName = process.env.ADMIN_NAME,
// adminPassword = process.env.ADMIN_PASSWORD

// Exportando as variáveis locais para serem usadas em outros arquivos
// Isso permite que outros arquivos importem essas variáveis e seus valores definidos no .env
// module.exports = { port, mongoUrl, adminName, adminPassword };
