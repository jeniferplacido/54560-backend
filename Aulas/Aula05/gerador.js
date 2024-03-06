// Função para gerar um número aleatório no intervalo de 1 a 20
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
}

// Cria um objeto para armazenar a contagem de cada número gerado
const contagemNumeros = {};

// Gera 10.000 números aleatórios e conta quantas vezes cada número foi gerado
for (let i = 0; i < 10000; i++) {
    const numero = gerarNumeroAleatorio();
    contagemNumeros[numero] = (contagemNumeros[numero] || 0) + 1;
}

// Exibe os resultados no console
console.log('Contagem de números gerados:');
for (const numero in contagemNumeros) {
    console.log(`${numero}: ${contagemNumeros[numero]}`);
}
