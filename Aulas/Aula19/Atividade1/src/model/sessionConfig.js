const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectToMongoDB = require('./mongoConfig'); // Certifique-se de importar corretamente o arquivo de configuração do MongoDB

// Conecta ao MongoDB
// connectToMongoDB();

// Configuração da sessão
const sessionConfig = {
    secret: 'Cod3r',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://agre:agre@cluster0.9xfjfdm.mongodb.net/',
        collection: 'sessions',
        ttl: 15// Tempo de vida da sessão em segundos (15 minutos neste exemplo)
        
    }),
    cookie: { maxAge: 15 * 60 * 1000 } // Tempo de vida do cookie de sessão em milissegundos (15 minutos neste exemplo)
};
console.log('Conectado ao MongoDB com sucesso!');

module.exports = sessionConfig;
