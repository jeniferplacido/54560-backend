
const express = require('express');

const app = express();

function complexOperation() {
  let result = 0;
  for(let i = 0; i<5e9; i++) {
    result += i;
  }
  return result;
}
app.get('/sum', (req, res) => {
  const result = complexOperation();
  res.send(`O resultado da operação é: ${result}`);
  console.log(`O resultado da operação é: ${result}`);
})

app.get('/', (req, res) => {
  res.send('O servidor foi iniciado');
  console.log('O servidor foi iniciado');
})

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 3000');
})