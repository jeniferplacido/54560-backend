// Importa o módulo express, um framework para Node.js que facilita a criação de aplicações web.
const express = require('express');

// Cria uma instância do express, que será usada para definir rotas e iniciar o servidor.
const app = express();

// Define uma rota GET para a raiz ('/'). Quando alguém acessa essa rota, a função é chamada.
app.get('/', (req, res) => {
    // Envia uma resposta de texto para o cliente que acessou a rota.
    res.send('Bem-vindo ao nosso serviço de operações matemáticas!');
});

// Define uma rota GET para '/simples'. Esta rota realiza uma operação matemática simples.
app.get('/simples', (req, res) => {
   let sum = 0; // Inicializa uma variável para armazenar a soma.
   // Um loop que soma os números de 0 a 999.
   for (let i = 0; i < 1000; i++) {
       sum += i; // Adiciona o valor de i à soma total.
   }
   // Envia uma resposta em formato JSON, indicando o status da operação e o resultado da soma.
   res.json({status:"sucesso", resultado: sum });
});

// Define uma rota GET para '/complexa', que realiza uma operação matemática mais pesada.
app.get('/complexa', (req, res) => {
    let sum = 0; // Inicializa uma variável para armazenar a soma.
    // Um loop que soma os números de 0 a 499.999.999, uma operação que demanda mais processamento.
    for (let i=0; i<5e8; i++) {
        sum += i; // Adiciona o valor de i à soma total.
    }
    // Envia uma resposta em formato JSON, indicando o status da operação e o resultado da soma.
    res.send({status:"sucesso", resultado: sum });
});

// Inicia o servidor para escutar na porta 8080. Quando o servidor estiver pronto, a função é chamada.
app.listen(8080, () => {
    // Exibe uma mensagem no console indicando que o servidor está rodando e em qual porta.
    console.log(`Servidor rodando na porta 8080!`);
});