// Importa o módulo express para criar um aplicativo Express
const express = require("express");
// Importa a função 'engine' do módulo express-handlebars
const { engine } = require("express-handlebars");
// Importa o módulo 'path' para lidar com caminhos de arquivos
const path = require("path");
// Importa o roteador de visualizações definido no arquivo view.router.js
const viewsRouter = require("./routes/view.router");
// Importa o módulo Socket.IO para habilitar comunicação em tempo real
const socketIO = require("socket.io");
// Importa o módulo HTTP do Node.js
const http = require("http");
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
app.use("/static", express.static(staticPath));
// Define a rota raiz para ser tratada pelo roteador de visualizações definido em view.router.js
app.use("/", viewsRouter);
// Array para armazenar as mensagens enviadas pelos usuários
const messages = [];
// Ouve os eventos de conexão dos clientes
io.on("connection", (socket) => {
  // Imprime uma mensagem no console quando um usuário se conecta
  console.log("Usuário conectado");
  // Ouve os eventos de mensagem enviados pelos clientes
  socket.on("message", (message) => {
    // Imprime as mensagens recebidas no console do servidor
    console.log('Mensagens recebidas:', messages);
    // Cria um objeto contendo o ID do socket e a mensagem enviada
    const data = {
      socketid: socket.id,
      message: message
    };
    // Adiciona a nova mensagem ao array de mensagens
    messages.push(data);
    // Emite a lista de mensagens atualizada para todos os clientes
    io.emit('message', messages);   
  });
  // Ouve o evento de desconexão do cliente
  socket.on('disconnect', () => {
    // Imprime uma mensagem no console quando um usuário se desconecta
    console.log('Usuário desconectado');
  });
});
// Inicia o servidor HTTP na porta 8080
server.listen(8080, () => {
  // Imprime uma mensagem no console quando o servidor começa a ouvir
  console.log("Servidor iniciado na porta 8080");
});