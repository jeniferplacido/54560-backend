const fs = require('fs');

fs.writeFileSync('./teste.txt', 'Hello, Coders, estou em um arquivo');

if(fs.existsSync('teste.txt')) {
    let conteudo = fs.readFileSync('teste.txt', 'utf-8');

    console.log(conteudo);
    fs.appendFileSync('teste.txt', ' e estou adicionando mais conteudo');

    conteudo = fs.readFileSync('teste.txt', 'utf-8');
    console.log(conteudo);

   fs.unlinkSync('teste.txt');
}