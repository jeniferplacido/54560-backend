const express = require('express');
const app = express();

let frase = "Frase inicial";

app.use(express.json());
app.get('/api/frase', (req, res) => {
  
    res.json({ frase });
});

app.get('/api/palavras/:pos', (req, res) => {

    let pos = parseInt(req.params.pos);
        let palavras = frase.split(" ");
        let palavra = palavras[pos - 1] || null;
       res.json({ busca: palavra });
});

app.post('/api/palavras', (req, res) => {
    
    let palavra = req.body.palavra;
  
    frase += " " + palavra;
        res.json({ adicionado: palavra, pos: frase.split(" ").length });
});

app.put('/api/palavras/:pos', (req, res) => {
        let pos = parseInt(req.params.pos);
    let palavra = req.body.palavra;
    let palavras = frase.split(" ");
       let anterior = palavras[pos - 1] || null;
       palavras[pos - 1] = palavra;
    frase = palavras.join(" ");
      res.json({ atualizado: palavra, anterior });
});

app.delete('/api/palavras/:pos', (req, res) => {
    let pos = parseInt(req.params.pos);
    let palavras = frase.split(" ");
    let removida = palavras.splice(pos - 1, 1);
    frase = palavras.join(" ");
    res.json({ removida: removida[0] });
});
app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080.`);
});
