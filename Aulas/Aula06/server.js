// Importa o módulo 'http', que é um módulo integrado do Node.js usado para criar servidores web.
const http = require('http'); 
// Cria um servidor HTTP usando a função 'createServer' do módulo 'http'.
const server = http.createServer((req, res) => { 
   
  // Envia a resposta HTTP com o texto "Meu primeiro ola mundo vindo do servidor!" e quebra de linha.
  res.end('Meu primeiro ola mundo neste backend! Hello Coders!!'); 
});
// Inicia o servidor para escutar conexões na porta 8080.
server.listen(8080, () => { 
  console.log(`Servidor está rodando na porta 8080`); // Exibe uma mensagem no console indicando que o servidor está rodando na porta 8080.
});
