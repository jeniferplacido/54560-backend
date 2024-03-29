// Importando os módulos necessários
const express = require('express'); // Importa o framework Express
const multer = require('multer'); // Importa o middleware Multer para manipulação de arquivos
const path = require('path'); // Importa o módulo path para lidar com caminhos de arquivos

// Inicializa o aplicativo Express
const app = express();

// Configuração do destino e nome do arquivo para o upload
const storage = multer.diskStorage({
    // Define o diretório de destino dos arquivos enviados
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    // Define o nome do arquivo após o upload
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Configura a instância do Multer com a estratégia de armazenamento definida anteriormente
const upload = multer({ storage: storage });

// Rota para lidar com o upload de arquivo
app.post('/upload', upload.single('file'), function (req, res) {
    // A manipulação do arquivo enviado pode ser feita aqui
    // Neste exemplo, estamos apenas enviando uma mensagem de sucesso
    res.send('Arquivo enviado com sucesso!');
});

// Iniciando o servidor na porta 3000 e exibindo mensagem no console
app.listen(8080, function () {
    console.log('Servidor rodando na porta 8080');
});

