// Importa o módulo express
const express = require('express');
// Cria uma instância do aplicativo Express
const app = express();

// Array de objetos do tipo usuário
const usuarios = [
    { id: 1, nome: 'João', sobrenome:'Oliveira', genero: 'M' },
    { id: 2, nome: 'Maria', sobrenome:'Silva', genero: 'F' },
    { id: 3, nome: 'Ana', sobrenome:'Santos', genero: 'F' },
    { id: 4, nome: 'Pedro', sobrenome:'Ferreira', genero: 'M' },
    { id: 5, nome: 'Paulo', sobrenome:'Oliveira', genero: 'M' },
    { id: 6, nome: 'Mariana', sobrenome:'Silva', genero: 'F' },
    { id: 7, nome: 'Antônio', sobrenome:'Santos', genero: 'M' },
    { id: 8, nome: 'José', sobrenome:'Ferreira', genero: 'M' },
    { id: 9, nome: 'Paula', sobrenome:'Oliveira', genero: 'F' },
    { id: 10, nome: 'Marta', sobrenome:'Silva', genero: 'F' },
];

// Rota para obter usuários com base no gênero
app.get('/', (req, res) => {
    // Verifica se há um parâmetro de consulta 'genero'
    let genero = req.query.genero;

    // Se não houver parâmetro 'genero', retorna todos os usuários
    if (!genero || (genero !== 'M' && genero !== 'F')) {
        // Retorna todos os usuários se não houver parâmetro de gênero ou se o gênero não for 'M' nem 'F'
        return res.send(usuarios);
    } else {
        // Filtra os usuários com base no gênero especificado
        let usuariosFiltrados = usuarios.filter(user => user.genero === genero);
        // Retorna os usuários filtrados
        res.send(usuariosFiltrados);
    }
});

// Inicia o servidor na porta definida (8080)
app.listen(8080, () => {
    console.log(`Servidor Express está rodando na porta 8080, pronto para fazer filtros de usuários por gênero.`);
});
