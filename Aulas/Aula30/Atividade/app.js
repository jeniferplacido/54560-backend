// Importa o módulo express para criar e configurar o servidor
const express = require('express');

// Importa o módulo twilio para enviar mensagens de texto
const twilio = require('twilio');

// Cria uma nova aplicação Express
const app = express();



// Cria um novo cliente Twilio com as credenciais da conta
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Define uma rota GET para '/sms'
app.get('/sms', async (req, res) => {
    // Extrai o nome e o produto da query string
    const { nome, produto } = req.query;

    // Se o nome ou o produto não estiverem presentes, retorna um erro
    if (!nome || !produto) {
        return res.status(400).send({ status: 'erro', message: 'Nome e produto são obrigatórios' });
    }

    // Cria a mensagem a ser enviada
    const messageBody = `Obrigado ${nome}, seu pedido de produto ${produto} foi aprovado`;

    try {
        // Tenta enviar a mensagem
        const message = await client.messages.create({
            body: messageBody,
            from: process.env.TWILIO_PHONE_NUMBER, 
            to: 'seu-numero-de-destino' 
        });

        // Registra o ID da mensagem
        console.log(message.sid);

        // Envia uma resposta de sucesso
        res.send({ status: 'sucesso', message: 'SMS enviado com sucesso' });
    } catch (error) {
        // Registra qualquer erro que ocorra
        console.error(error);

        // Envia uma resposta de erro
        res.status(500).send({ status: 'erro', message: 'Erro ao enviar SMS' });
    }
});

// Inicia o servidor na porta 8080
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});