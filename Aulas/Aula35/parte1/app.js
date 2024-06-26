// const cluster = require('cluster')

// console.log(cluster.isPrimary)

const cluster = require('cluster')

if(cluster.isPrimary) {
    console.log('Processo primário, gerando processo trabalhador')
    cluster.fork()
} else {
    console.log('Ao ser um processo criado a partir de um fork, não conto como primário, por isso isPrimary = false. Então sou um worker!')
}