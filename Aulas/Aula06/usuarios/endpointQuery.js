const express = require("express");
const app = express();

// Configuração para permitir o uso de dados codificados na URL
app.use(express.urlencoded({ extended: true }));

// Rota para receber dados codificados na URL
app.get("/dados", (req, res) => {
  // Acessando os parâmetros de consulta da URL usando req.query
  let consultas = req.query;

  // Exibindo os parâmetros de consulta no console
  let { nome, sobrenome, idade } = req.query;

  // Respondendo com os parâmetros de consulta
  res.send(consultas);
});

// Inicia o servidor na porta definida
app.listen(8080, () => {
  console.log(
    `Servidor Express está rodando na porta 8080, e pronto para testar consultas`
  );
});
