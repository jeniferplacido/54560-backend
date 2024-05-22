// Definindo a função peticion
function peticion(){
    // Fazendo uma requisição para a URL 'http://localhost:8080/test'
    // fetch é uma função embutida no JavaScript que faz requisições HTTP
    fetch('http://localhost:8080/test')
    // Quando a requisição é concluída, ela retorna uma promessa que resolve para a resposta da requisição
    // O método then é usado para especificar o que fazer quando a promessa é resolvida
    .then(result=>result.json()) // Converte a resposta em JSON
    // Quando a conversão para JSON é concluída, ela retorna outra promessa que resolve para o JSON
    .then(json=>console.log(json)) // Imprime o JSON no console
}
