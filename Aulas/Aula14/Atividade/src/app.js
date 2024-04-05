// Importa o módulo 'express' para criar o aplicativo Express
const express = require('express');
// Cria uma instância do aplicativo Express
const app = express();
// Importa os roteadores para usuários e pets
const alunosRouter = require('./routes/alunosRouter');
const mongoose = require ('mongoose')

app.use(express.json());


  
mongoose.connect('mongodb+srv://jeni:adACvS3KINFEeaaE@codercluster.fqipbqy.mongodb.net/')
.catch((error)=>{
    if(error){
        console.log('Não foi possível conectar ao banco de dados: '+ error)
        process.exit()
    }
})

app.use('/api/alunos', alunosRouter);

// Inicia o servidor Express e o faz escutar na porta 8080
app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080`);
});
