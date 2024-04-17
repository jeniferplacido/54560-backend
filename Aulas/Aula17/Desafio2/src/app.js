const express = require('express');
const {engine} = require('express-handlebars');
const mongoose = require('mongoose');
const Aluno = require('./model/aluno');

const app = express();


app.engine('handlebars', engine({
        // Adicione as opções de tempo de execução aqui
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb+srv://pag:pag@cluster0.srs49pv.mongodb.net/')
        .then(() => {
                console.log('Conectado ao MongoDB');
        }).catch(err => {
                console.error('Erro ao conectar ao MongoDB:', err);
        });

// Rota para exibir a lista de alunos paginada
app.get('/alunos', async (req, res) => {
    const page = req.query.page || 1; // Página atual (padrão: 1)

    try {
        const alunos = await Aluno.paginate({}, { page, limit: 10}); // Limite de 4 alunos por página

        res.render('index', {
            alunos: alunos.docs,
            page: alunos.page,
            totalPages: alunos.totalPages,
            prevPage: alunos.hasPrevPage ? alunos.prevPage : null,
            nextPage: alunos.hasNextPage ? alunos.nextPage : null
        });
    } catch (err) {
        console.error('Erro ao buscar e paginar alunos:', err);
        res.status(500).send('Erro interno do servidor');
    }
});

app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080`);
});
