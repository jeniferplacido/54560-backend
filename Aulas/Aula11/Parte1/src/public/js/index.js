// Cria uma conexão com o servidor usando a biblioteca socket.io
const socket = io();

// Mostra um popup de alerta bonito usando a biblioteca SweetAlert2
Swal.fire({
    // Define o título do popup como 'Olá Coders!'
    title: 'Olá Coders!',
    // Define o texto do popup como 'Alerta básico com SweetAlert2'
    text:'Alerta básico com SweetAlert2',
    // Define o ícone do popup como 'success' (ícone de sucesso)
    icon: 'success'
})