const os = require('os')
const cluster = require('cluster')


const numeroDeProcessadores = os.cpus().length;


if(cluster.isPrimary) {
    console.log('Processo primário, gerando processo trabalhador')
    for (let i = 0; i < numeroDeProcessadores; i++) {
        cluster.fork()
    }

} else {
    console.log('Ao ser um processo criado a partir de um fork, não conto como primário, por isso isPrimary = false. Então sou um worker!')
    console.log(`Processo: ${process.pid}`)
}
console.log(`Quantidade de processadores: ${numeroDeProcessadores}`);