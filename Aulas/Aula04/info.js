const fs = require('fs');

// Função para ler o conteúdo do arquivo package.json
const lerPackageJSON = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('package.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};

// Função principal para executar o programa
const executarPrograma = async () => {
    try {
        // Lê o conteúdo do arquivo package.json
        const conteudo = await lerPackageJSON();
        
        // Converte o conteúdo para objeto
        const conteudoObj = JSON.parse(conteudo);
        
        // Obtém o tamanho do arquivo em bytes
        const tamanho = Buffer.byteLength(conteudo, 'utf8');
        
        // Cria o objeto 'info' com os dados necessários
        const info = {
            conteudoStr: conteudo,
            conteudoObj: conteudoObj,
            size: tamanho
        };
        
        // Exibe o objeto 'info' no console
        console.log(info);
    } catch (err) {
        console.error('Erro ao ler o arquivo package.json:', err);
    }
};

// Chama a função principal para executar o programa
executarPrograma();
