// Importa o módulo 'express' para o seu código
const express = require('express');

// Cria uma instância de um roteador do Express
const router = express.Router();

// Define uma rota GET para o caminho raiz ('/')
router.get('/', (req, res) => {
    // Função de callback que será executada quando essa rota for acessada
    // Recebe dois parâmetros: req (objeto de solicitação HTTP) e res (objeto de resposta HTTP)
    
    // Renderiza o modelo chamado 'index'
    // 'index' é o nome do arquivo do modelo que será renderizado
    // O segundo argumento é um objeto vazio {} que pode conter dados para o modelo (não utilizado neste exemplo)
    res.render('index', {});
});

// Exporta o roteador para que possa ser utilizado em outros arquivos
module.exports = router;
