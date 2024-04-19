const express = require('express'); // Importa o módulo 'express' para criar o servidor web
const cookieParser = require('cookie-parser'); // Importa o middleware 'cookie-parser' para manipulação de cookies

const app = express(); // Cria uma instância do aplicativo Express

app.use(cookieParser('C0d3r')); // Usa o middleware 'cookie-parser' para o aplicativo

// Rota para configurar um cookie
app.get('/setCookie', (req, res) => {
    // Define um cookie chamado 'CoderCookie' com o valor 'Este é um cookie muito poderoso'
    // O cookie é assinado (signed) e tem uma duração máxima de 1000000 milissegundos
    res.cookie('CoderCookie', 'Este é um cookie muito poderoso', { maxAge: 1000000, signed: true })
        .send('Cookie setado com sucesso!'); // Retorna uma mensagem de sucesso ao cliente
});

// Rota para obter todos os cookies enviados pelo cliente
app.get('/getCookies', (req, res) => {
    res.send(req.cookies).send('Cookies recebidos!'); // Retorna todos os cookies recebidos do cliente
});

// Rota para excluir o cookie 'CoderCookie'
// Esta rota está comentada para evitar a exclusão acidental do cookie
// Se necessário, você pode descomentá-la para permitir a exclusão do cookie
app.get('/deleteCookie', (req, res) => {
    res.clearCookie('CoderCookie').send('Cookie deletado com sucesso!'); // Exclui o cookie 'CoderCookie' e retorna uma mensagem de sucesso
});

// Inicia o servidor na porta 8080 e imprime uma mensagem no console quando estiver pronto para receber conexões
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
