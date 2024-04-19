const express = require('express'); // Importa o módulo Express
const cookieParser = require('cookie-parser'); // Importa o módulo cookie-parser para lidar com cookies
const { engine } = require('express-handlebars'); // Importa o mecanismo de template Handlebars
const path = require("path"); // Importa o módulo path para lidar com caminhos de arquivos

const app = express(); // Cria uma instância do aplicativo Express

// Adiciona o middleware cookie-parser ao aplicativo e define uma chave secreta para assinar os cookies
app.use(cookieParser()); 

// Configura o aplicativo para analisar dados codificados na URL (por exemplo, de formulários)
app.use(express.urlencoded({ extended: true }));

// Configura o aplicativo para analisar dados JSON enviados no corpo da solicitação
app.use(express.json());

// Configuração do mecanismo de modelo Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars'); // Define Handlebars como o mecanismo de visualização padrão
app.set('views', path.join(__dirname, "views")); // Define o diretório de visualização como 'views'

// Rota GET para renderizar a página inicial
app.get('/', (req, res) => {
    res.render('index'); // Renderiza a página 'index' usando o mecanismo de template Handlebars
});

// Rota GET para configurar um cookie
app.get('/setCookie', (req, res) => {
    // Define um cookie chamado 'CoderCookie' com uma mensagem e uma opção de assinatura
    res.cookie('CoderCookie', 'Este é um cookie muito poderoso', { maxAge: 1000 });
    res.send('Cookie setado com sucesso!'); // Retorna uma mensagem de sucesso ao cliente
});

// Rota GET para obter o valor de um cookie
app.get('/getCookie', (req, res) => {
    // Obtém o valor do cookie 'CoderCookie' e o envia como uma resposta JSON
    const cookie = req.signedCookies.CoderCookie;
    res.json({ cookie });
});

// Rota POST para configurar um cookie com base nos dados do corpo da solicitação
app.post('/cookie', (req, res) => {
    const { nome, email } = req.body; // Obtém os dados de nome e email do corpo da solicitação
    // Define um cookie com base nos dados fornecidos e retorna uma mensagem de sucesso ao cliente
    res.cookie(nome, email, { maxAge: 10000, signed: true }).send('Cookie setado com sucesso!');
});

// Inicia o servidor Express na porta 8080 e exibe uma mensagem de log
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
