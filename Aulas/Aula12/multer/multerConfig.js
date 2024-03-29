// Importando o módulo Multer
const multer = require('multer');

// Configuração do destino e nome do arquivo
const storage = multer.diskStorage({
    // Função para definir o diretório onde os arquivos serão salvos
    destination: function (req, file, cb) {
        // Aqui você especifica o diretório onde deseja salvar os arquivos enviados
        // No caso, 'uploads/' indica que os arquivos serão salvos na pasta 'uploads' dentro do seu projeto
        cb(null, 'uploads/');
    },
    // Função para definir o nome do arquivo
    filename: function (req, file, cb) {
        // Aqui você define como o nome do arquivo será composto
        // No exemplo, estamos usando o timestamp atual (Date.now()) para garantir que cada nome seja único
        // Em seguida, adicionamos um hífen (-) e o nome original do arquivo enviado (file.originalname)
        // Isso garante que cada arquivo tenha um nome único e identificável
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Configurando a instância do Multer com a configuração de storage que acabamos de definir
const upload = multer({ storage: storage });

// Exportando a instância do Multer configurada para ser utilizada em outros arquivos do projeto
module.exports = upload;
