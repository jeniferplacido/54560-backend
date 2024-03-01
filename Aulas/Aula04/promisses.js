const fs = require('fs');

const operacoesAssincronas = async() => {
    await fs.promises.writeFile('./exemploPromises.txt', 'Hello, Coders, Saudações da Promessa');

    let resultado = await fs.promises.readFile('./exemploPromises.txt', 'utf-8');
    console.log(resultado);

    await fs.promises.appendFile('./exemploPromises.txt', ' e estou adicionando mais conteudo');

    resultado = await fs.promises.readFile('./exemploPromises.txt', 'utf-8');
    console.log(resultado);

   await fs.promises.unlink('./exemploPromises.txt');
};

operacoesAssincronas();