// Importa o módulo express
const express = require('express');
// Importa o módulo nodemailer para enviar emails
const nodemailer = require('nodemailer');
// Importa o módulo path para manipular caminhos de arquivos
const path = require('path');

// Cria uma nova aplicação Express
const app = express();

// Cria um transportador de email com as configurações do Gmail
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'jenifer.sdti@gmail.com',
        pass: 'xtai usei urcr bkno'
    }
});

// Define uma rota GET para '/mail'
app.get('/mail', async (req, res) => {
    try {
        // Tenta enviar um email
        let result = await transport.sendMail({
            from: 'Jeni jeni <jenifer.sdti@gmail.com>', // O remetente do email
            to: 'iugmali@gmail.com, daniel_adamis@hotmail.com, guilherme.magalhaes92@hotmail.com, gabrielogbusiness@gmail.com, cleyssonfreitas30@gmail.com', // O destinatário do email
            subject: 'teste', // O assunto do email
            html: '<h1>Teste</h1>', // O corpo do email em HTML
            attachments: [{ // Anexos do email
                 filename: 'code.png', // O nome do arquivo
                 path: path.join(__dirname, 'img', 'code.png'), // O caminho para o arquivo
                cid: 'code' // O ID do conteúdo do anexo
         } ]
        });
        console.log(result); // Registra o resultado do envio do email
        res.send({ status: "sucesso", result: "Email enviado com sucesso" }); // Envia uma resposta de sucesso
    } catch (error) {
        console.error(error); // Registra qualquer erro que ocorra
        res.status(500).send({ status: "erro", result: "Erro ao enviar o email" }); // Envia uma resposta de erro
    }
});

// Inicia o servidor na porta 8080
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});