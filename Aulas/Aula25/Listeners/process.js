process.on('exit', (code) => {
    console.log('Este código será executado imediatamente antes de sair do processo');
});

process.on('uncaughtException', exception => {
    console.log('Este código captura todas as exceções que não foram tratadas, como chamar uma função que não foi declarada');
    });
process.on('message', message => {
    console.log('Este código será executado quando receber uma mensagem de outro processo');
    });

console()