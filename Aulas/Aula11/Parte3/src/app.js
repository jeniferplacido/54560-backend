// Importa os módulos express, express-handlebars, path e socket.io
const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const socketIO = require("socket.io");
const http = require("http");

// Importa o roteador de visualizações definido no arquivo view.router.js
const viewsRouter = require("./routes/view.router");

// Cria uma instância do aplicativo Express
const app = express();

// Habilita o uso de JSON no aplicativo Express
app.use(express.json());

// Habilita o uso de dados codificados na URL (como dados de formulário)
app.use(express.urlencoded({ extended: true }));

// Cria um servidor HTTP usando o aplicativo Express
const server = http.createServer(app);

// Cria uma instância do Socket.IO e o faz ouvir o servidor HTTP criado
const io = socketIO(server);

// Configura o mecanismo de visualização do Handlebars para o Express
app.engine("handlebars", engine());

// Define o mecanismo de visualização do Handlebars como o mecanismo de visualização padrão do Express
app.set("view engine", "handlebars");

// Define o diretório de visualizações para o Express
app.set("views", path.join(__dirname, "views"));

// Define o diretório de arquivos estáticos para o Express
const staticPath = path.join(__dirname, "public");
app.use("/public", express.static(staticPath));

// Define a rota raiz para ser tratada pelo roteador de visualizações definido em view.router.js
app.use("/", viewsRouter);

// Array para armazenar as mensagens enviadas pelos usuários
let messages = [];

// Evento de conexão do Socket.IO
io.on('connection', socket => {
  console.log('Novo cliente conectado');

  // Evento de autenticação de usuário
  socket.on('authenticate', (user) => {
    console.log('Usuário autenticado', user);
    
    // Emitir evento para notificar novo usuário conectado para todos os clientes
    socket.broadcast.emit("userConnected", user);

    // Enviar mensagens existentes para o cliente recém-autenticado
    socket.emit('messageLogs', messages);
  });

  // Evento de envio de mensagem
  socket.on('message', data => {
    messages.push(data);
    // Emitir evento de atualização de mensagens para todos os clientes
    io.emit('messageLogs', messages);
  });
});

// Inicia o servidor na porta 8080
server.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080");
});
