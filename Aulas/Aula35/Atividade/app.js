// Importa o módulo 'cluster' do Node.js 
//para permitir a criação de processos filhos que rodam simultaneamente.
const cluster = require('cluster');

// Importa o módulo 'os' para acessar informações do sistema operacional, 
//como o número de CPUs.
const os = require('os');

// Importa o módulo 'express', 
//um framework para Node.js que facilita a criação de aplicações web.
const express = require('express');

// Verifica se o processo atual é o processo principal (master). 
//O processo principal é responsável por iniciar os workers.
if (cluster.isPrimary) {
    // Obtém o número total de CPUs disponíveis no sistema.
    const numCPUs = os.cpus().length;
    // Exibe no console o número de CPUs.
    console.log(`Número de CPUs: ${numCPUs}`);
    // Exibe no console que o processo principal está rodando.
    console.log(`Master ${process.pid} está rodando`);

    // Cria um processo filho (worker) para cada CPU disponível, 
    //para distribuir a carga de trabalho.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Define o que acontece quando um worker morre (por exemplo, se o processo é encerrado).
    cluster.on('exit', (worker, code, signal) => {
        // Exibe no console que um worker morreu.
        console.log(`Worker ${worker.process.pid} morreu. Criando um novo worker...`);
        // Cria um novo worker para substituir o que morreu, mantendo o número de workers.
        cluster.fork();
    });

} else {
    // Cria uma nova aplicação Express se o processo atual for um worker.
    const app = express();

    // Define uma rota HTTP GET para a raiz ('/') do servidor. 
    //Quando acessada, retorna uma mensagem.
    app.get('/', (req, res) => {
        // Envia uma resposta com uma mensagem, 
        //incluindo o ID do processo (PID) do worker.
        res.send('Olá do Worker ' + process.pid);
    });

    // Inicia o servidor na porta 8080 e exibe 
    //uma mensagem no console quando estiver pronto.
    app.listen(8080, () => {
        // Exibe no console que o worker iniciou e está escutando na porta 8080.
        console.log(`Worker ${process.pid} iniciou e está escutando na porta 8080`);
    });
}