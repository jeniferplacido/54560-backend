const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(function (numero) {
  return numero % 2 === 0; // este é o meu callback
})

console.log(numerosPares);