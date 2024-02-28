const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosDobrados = numeros.map(function (numero) {
  return numero * 2; // este é o meu callback
});

console.log(numerosDobrados);