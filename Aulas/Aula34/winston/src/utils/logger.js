// Importa o módulo 'winston'
const winston = require('winston');

// Cria um novo logger usando a função 'createLogger' do 'winston'. 
//Este logger tem dois transportes: um para o console e outro para um arquivo.
// O transporte do console registra mensagens de nível 'http'
// ou superior, enquanto o transporte do arquivo registra 
//mensagens de nível 'warn' ou superior.
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'http' }),
    new winston.transports.File({ filename: './errors.log', level: 'warn' }),
  ],
});

// Define uma função chamada 'addLogger'. 
//Esta função é um middleware para o Express.
// Um middleware é uma função que é executada para cada requisição
// que a aplicação recebe.
const addLogger = (req, res, next) => {
  // Adiciona o logger à requisição. Isso permite que o logger seja acessado em outros middlewares ou rotas.
  req.logger = logger;
  // Usa o logger para registrar uma mensagem de nível 'http'. A mensagem contém o método HTTP da requisição, a URL da requisição e a data atual.
  req.logger.http(`${req.method} na ${req.url} - ${new Date().toLocaleDateString()}`);
  // Chama a função 'next' para passar o controle para o próximo middleware ou rota.
  next();
};

// Exporta a função 'addLogger'. 
module.exports = addLogger;