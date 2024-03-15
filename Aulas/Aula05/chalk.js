// Importando o pacote chalk
const chalk = require('chalk');


// Usando o pacote chalk para colorir o texto
console.log(chalk.blue('Este texto está em azul.'));
console.log(chalk.red('Este texto está em vermelho.'));
console.log(chalk.green('Este texto está em verde.'));
console.log(chalk.yellow('Este texto está em amarelo.'));


const https = require('https');

// Configurações para a solicitação HTTPS
const options = {
  hostname: 'wttr.in',
  path: '/Osasco?format=%C+%t',
  method: 'GET'
};

// Cria a solicitação HTTPS
const req = https.request(options, (res) => {
  // Verifica o código de status da resposta
  if (res.statusCode === 301 || res.statusCode === 302) {
    // Se for um redirecionamento, segue para a nova localização
    const newLocation = res.headers.location;
    console.log(`Redirecionado para: ${newLocation}`);
    https.get(newLocation, (res) => {
      // Processa a nova resposta como desejado
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log(data);
      });
    });
  } else {
    // Se não for um redirecionamento, trata a resposta normalmente
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(data);
    });
  }
});

// Evento de 'erro' - trata erros de solicitação
req.on('error', (error) => {
  console.error('Erro ao acessar a API do wttr.in:', error);
});

// Finaliza a solicitação
req.end();


