// Importa o módulo 'winston', que é uma biblioteca de logging popular para Node.js.
const winston = require('winston');

// Define as opções de níveis personalizados para o logger. Cada nível tem um número associado a ele, que define a prioridade do nível.
// Além disso, cada nível tem uma cor associada a ele, que é usada quando as mensagens são registradas no console.
const customLevelsOptions = {
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4
  },
  colors: {
    fatal: 'red',
    error: 'orange',
    warn: 'yellow',
    info: 'blue',
    debug: 'white'
  },
};

// Cria um novo logger usando a função 'createLogger' do 'winston'. Este logger usa os níveis personalizados definidos acima.
// O logger tem dois transportes: um para o console e outro para um arquivo.
// O transporte do console registra mensagens de nível 'info' ou superior e usa colorização e formato simples.
// O transporte do arquivo registra mensagens de nível 'warn' ou superior e usa formato simples.
const logger = winston.createLogger({
  levels: customLevelsOptions.levels,
  transports: [
    new winston.transports.Console({ 
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize({ colors: customLevelsOptions.colors }),
        winston.format.simple()
      ) 
    }),
    new winston.transports.File({ filename: './errors.log', level: 'warn', format: winston.format.simple() })
  ]
});

// Define uma função chamada 'addLogger'. Esta função é um middleware para o Express.
// Um middleware é uma função que é executada para cada requisição que a aplicação recebe.
const addLogger = (req, res, next) => {
  // Adiciona o logger à requisição. Isso permite que o logger seja acessado em outros middlewares ou rotas.
  req.logger = logger;
  // Chama a função 'next' para passar o controle para o próximo middleware ou rota.
  next();
};

// Exporta a função 'addLogger'. Isso permite que outros módulos importem 'addLogger' e usem essa função como um middleware.
module.exports = addLogger;