const fs = require('fs');

// Obtém a data e hora atual
const dataAtual = new Date().toLocaleString();

// Escreve a data e hora em um arquivo
fs.writeFile('data.txt', dataAtual, (err) => {
    if (err) {
        console.error('Erro ao criar o arquivo:', err);
        return;
    }
    console.log('Arquivo criado com sucesso!');
    
    // Lê o arquivo e exibe o conteúdo no console
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }
        console.log('Este é o conteúdo do arquivo data.txt: ');
        console.log(data);
    });
});
