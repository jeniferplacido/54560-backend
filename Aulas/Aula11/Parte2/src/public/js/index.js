const socket = io();
let user;
let chatBox = document.getElementById('chatbox');


Swal.fire({
    title: 'Identificar',
    input: 'text',
    text:'Digite o nome de usuário para se identificar no chat',
    inputValidator: (value) => {
        return !value && 'Por favor, digite o nome de usuário para continuar!'
    },
    allowOutsideClick: false
}).then((result) => {
    user = result.value;    
});

chatBox.addEventListener('keyup', evt => {
    console.log('keyup', evt.key);
    if (evt.key === 'Enter') {
        if (chatBox.value.trim().length > 0) {
            socket.emit('message', { user: user, message: chatBox.value });
            chatBox.value = '';
        }
    }
})

socket.on('messageLogs', data => {
    let logs = document.getElementById('messageLogs');
    let messages = '';
    data.forEach(message=>{
        messages = messages + `${message.user} diz: ${message.message} <br/>`;
    });
    logs.innerHTML = messages;
});