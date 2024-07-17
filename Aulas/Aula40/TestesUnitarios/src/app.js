import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import path from 'path';

// Importando rotas
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT || 8081;

// Conexão com MongoDB
mongoose.connect(`mongodb+srv://jeni:jeni@cluster0.5nyoc9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('MongoDB connection successful'))
    .catch(err => console.error('MongoDB connection error:', err));

// Convertendo import.meta.url para __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para o arquivo Swagger YAML
const swaggerFilePath = path.resolve(__dirname, '../swagger.yaml');
console.log('Swagger file path:', swaggerFilePath);

// Opções do Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'AdoptMe API',
            description: 'API para adotar mascotes',
            version: '1.0.0'
        }
    },
    apis: [swaggerFilePath] 
};

// Gerando especificações do Swagger
const specs = swaggerJSDoc(swaggerOptions);

// Middleware para servir a documentação do Swagger UI
app.use('/apidocs', swaggerUi.serve);
app.get('/apidocs', swaggerUi.setup(specs));

// Middleware para interpretar JSON e cookies
app.use(express.json());
app.use(cookieParser());

// Rotas principais da API
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);

// Inicialização do servidor
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
