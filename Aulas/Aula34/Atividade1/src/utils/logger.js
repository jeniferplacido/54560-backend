// Importa o módulo 'winston', que é uma biblioteca de logging popular para Node.js.
const winston = require('winston');

// Cria um logger para o ambiente de desenvolvimento. Este logger tem um nível de 'verbose', o que significa que registra todos os tipos de mensagens.
// O formato do logger combina colorização (para tornar o output mais legível), timestamp e uma função personalizada para formatar a mensagem.
// O logger tem um transporte que registra as mensagens no console.
const devLogger = winston.createLogger({
  level: 'verbose',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console()
  ],
});

// Cria um logger para o ambiente de produção. Este logger tem um nível de 'http', o que significa que registra mensagens de nível 'http' e acima.
// O formato do logger combina timestamp e formato JSON.
// O logger tem dois transportes: um que registra mensagens de nível 'http' no console e outro que registra mensagens de nível 'warn' em um arquivo.
const prodLogger = winston.createLogger({
  level: 'http',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({ level: 'http' }),
    new winston.transports.File({ filename: './errors.log', level: 'warn' })
  ],
});

// Define uma função chamada 'addLogger'. Esta função é um middleware para o Express.
// Um middleware é uma função que é executada para cada requisição que a aplicação recebe.
const addLogger = (req, res, next) => {
  // Se o ambiente é de produção, usa o logger de produção. Caso contrário, usa o logger de desenvolvimento.
  if (process.env.NODE_ENV === 'production') {
    req.logger = prodLogger;
  } else {
    req.logger = devLogger;
  }
  // Usa o logger para registrar uma mensagem de nível 'http'. A mensagem contém o método HTTP da requisição, a URL da requisição e a data atual.
  req.logger.http(`${req.method} na ${req.url} - ${new Date().toLocaleDateString()}`);
  // Chama a função 'next' para passar o controle para o próximo middleware ou rota.
  next();
};

// Exporta a função 'addLogger'. Isso permite que outros módulos importem 'addLogger' e usem essa função como um middleware.
module.exports = addLogger;