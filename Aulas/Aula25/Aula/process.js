// Se executado com o comando node process.js 1 2 3
// O resultado será: [ '1', '2', '3' ]
// process.argv.slice retorna os argumentos passados ao executar o programa
console.log(process.argv.slice(2));

// Se executado com o comando node process.js a 2 -a
// O resultado será: [ 'a', '2', '-a' ]
console.log(process.argv.slice(2));

// Se executado com o comando node process.js 
// O resultado será: []
console.log(process.argv.slice(2));

// Se executado com o comando node process.js --mode development
// O resultado será: [ '--mode', 'development' ]
console.log(process.argv.slice(2));