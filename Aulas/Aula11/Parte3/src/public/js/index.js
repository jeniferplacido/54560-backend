// Conexão com o servidor WebSocket usando socket.io
const socket = io();
// Mensagem exibida no console ao estabelecer a conexão com sucesso
console.log('Conexão estabelecida com sucesso!');

// Função para enviar uma mensagem ao servidor quando o usuário pressiona Enter
function sendMessage() {
    // Obtém o elemento HTML onde o usuário digita as mensagens
    const chatBox = document.getElementById('chatbox');
    // Obtém o conteúdo da mensagem e remove espaços em branco extras
    const message = chatBox.value.trim();

    // Verifica se a mensagem não está vazia antes de enviar
    if (message.length > 0) {
        // Emite um evento 'message' para o servidor com o nome de usuário e a mensagem
        socket.emit('message', { user: user, message: message });
        // Limpa o campo de mensagem após enviar
        chatBox.value = '';
    }
}

// Evento para identificar o usuário usando um popup Swal (SweetAlert)
Swal.fire({
    // Define o título do popup como 'Identificar'
    title: 'Identificar',
    // Define o tipo de input como 'text' para que o usuário possa inserir texto
    input: 'text',
    // Define o texto do popup como 'Digite o nome de usuário para se identificar no chat'
    text: 'Digite o nome de usuário para se identificar no chat',
    // Define uma função para validar o input do usuário
    inputValidator: (value) => {
        // Retorna uma mensagem de erro se o valor não for inserido
        return !value && 'Por favor, digite o nome de usuário para continuar!';
    },
    // Impede que o usuário feche o popup clicando fora dele
    allowOutsideClick: false
}).then((result) => {
    // Verifica se o usuário confirmou o input (pressionou o botão OK)
    if (result.isConfirmed) {
        // Armazena o nome de usuário inserido pelo usuário
        user = result.value;

        // Adiciona um evento de tecla pressionada (keyup) ao campo de chatBox
        const chatBox = document.getElementById('chatbox');
        chatBox.addEventListener('keyup', (evt) => {
            // Verifica se a tecla pressionada foi a tecla Enter
            if (evt.key === 'Enter') {
                // Chama a função sendMessage para enviar a mensagem
                sendMessage();
            }
        });

        // Recebe logs de mensagens do servidor com o evento 'messageLogs'
        socket.on('messageLogs', (data) => {
            // Obtém o elemento HTML onde as mensagens do chat serão exibidas
            const logs = document.getElementById('messageLogs');
            let messages = '';
            // Cria uma string formatada para cada mensagem recebida do servidor
            data.forEach((message) => {
                messages += `${message.user} diz: ${message.message} <br/>`;
            });
            // Atualiza o conteúdo do elemento HTML com as mensagens formatadas
            logs.innerHTML = messages;
        });

        // Emite um evento 'authenticate' para o servidor após o usuário ser autenticado
        socket.emit('authenticate', user);

        // Recebe notificação de novo usuário conectado do servidor com o evento 'userConnected'
        socket.on('userConnected', (username) => {
            // Verifica se o usuário conectado é diferente do usuário atual para evitar notificações duplicadas
            if (user !== username) {
                // Exibe um popup de informação (toast) informando que um novo usuário se conectou
                Swal.fire({
                    title: 'Novo Usuário Conectado',
                    text: `${username} acabou de se conectar.`,
                    icon: 'info',
                    toast: true,
                    position: 'top-right'
                });
            }
        });
    }
});
