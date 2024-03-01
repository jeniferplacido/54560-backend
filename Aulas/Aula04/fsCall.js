const fs = require('fs');
fs.writeFile('./exemploCallback.txt', 'Hello, Coders, Saudações do Callback', (err) => {
    if(err) return console.error('Erro ao criar arquivo');
    fs.readFile('./exemploCallback.txt', 'utf-8', (err, resultado) => {
        if(err) return console.error('Erro ao ler arquivo');
        console.log(resultado);
        fs.appendFile('./exemploCallback.txt', ' e estou adicionando mais conteudo', (err) => {
            if(err) return console.error('Erro ao atualizar o conteudo');
            fs.readFile('./exemploCallback.txt', 'utf-8', (err, resultado) => {
                if(err) return console.error('Erro ao ler arquivo');
                console.log(resultado);
              //  fs.unlink('./exemploCallback.txt', (err) => {
                 //   if(err) return console.error('Erro ao deletar arquivo');
              //  });
            });
        });
    });
});
