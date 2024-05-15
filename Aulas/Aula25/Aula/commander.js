const commander = require('commander'); // importa o módulo commander

const programa = new commander.Command(); // cria um novo comando

programa // define as opções e argumentos do comando
    .option('-d', 'Variável para debug', false) // primeiro: o comando, segundo: a descricão, terceiro: o valor padrão (default)
    .option('-p <porta>', 'Porta Servidor', '8080') // porta é a porta a ser configurada
    .option('--mode <mode>', 'Mode de trabalho', 'produção') // <mode> é o argumento para colocar
    // para requiredOption, o terceiro argumento é uma mensagem de erro se não especificado
    .requiredOption('-u <user>', 'Usuário usando o aplicativo', 'Nenhum usuário declarado') 
    .option('-1, --letters [letters...]','Letras especificas')

    programa.parse(process.argv); // parse é usado para fechar a configuração do comando

    console.log('Opções: ', programa.opts()); // exibe as opções e argumentos do comando
    console.log('Remanejando argumentos: ', programa.args); // exibe os argumentos do comando

// enviando argumentos: node commander.js -d -p 3000 --mode development -u root --letters a b c

// enviando argumentos ao commander: node commander.js -p 8080 -u root 2 a 5 --letters a b c