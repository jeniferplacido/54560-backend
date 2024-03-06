'use strict';

const https = require('https');

const CIDADES = [
  'osasco',
  'salvador',
  'paris',
  'saopaulo',
  'warsaw',
  'rome',
  'madrid',
  'moscow',
  'beijing',
  'capetown',
];

// Função para obter a previsão do tempo de uma cidade aleatória
function obterPrevisaoDoTempo(callback) {
  const cidade = CIDADES[Math.floor(Math.random() * CIDADES.length)];
  const url = `https://wttr.in/${cidade}`;

  https.get(url, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
      responseData += chunk;
    });

    res.on('end', () => {
      callback(null, responseData);
    });
  }).on('error', (err) => {
    callback(err, null);
  });
}

// Função para lidar com a requisição e enviar a previsão do tempo como resposta
function lidarComRequisicao(request, response) {
  obterPrevisaoDoTempo((err, data) => {
    if (err) {
      console.error('Ocorreu um erro:', err);
      response.statusCode = 500;
      response.end('Erro ao consultar a previsão do tempo.');
    } else {
      response.setHeader('Content-Type', 'text/html'); // Define o tipo de conteúdo como HTML
      response.end(data); // Envia a resposta (previsão do tempo) para o cliente
    }
  });
}

// Cria um servidor HTTP e configura a função de tratamento de requisições
const server = https.createServer(lidarComRequisicao);

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
