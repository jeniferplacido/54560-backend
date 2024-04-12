// Importa a biblioteca mongoose, que é uma biblioteca do Node.js para modelar objetos MongoDB
const mongoose = require('mongoose');

// Importa os modelos de alunos e cursos definidos em arquivos separados
const studentModel = require('./models/students');
const courseModel = require('./models/courses');

// Define uma função assíncrona chamada environment para realizar operações no banco de dados
const environment = async () => {
  // Conecta-se ao banco de dados MongoDB usando a URL de conexão
  await mongoose.connect('mongodb+srv://coders:coders@users.dqlbfvu.mongodb.net/')
    .then(() => console.log('Conexão com o MongoDB estabelecida'))
    .catch(err => console.error('Erro ao conectar com o MongoDB:', err));  

  // Operações de exemplo com os modelos de aluno e curso
  
  // Cria um novo aluno no banco de dados
   //await studentModel.create({
    //first_name: 'Jeni',
    // last_name: 'Placido',
   // email: 'jeni@jenis',
   //  gender: 'F'
  // });

  // Cria um novo curso no banco de dados
   //await courseModel.create({
   //  title: 'Curso de MongoDB',
   // description: 'É um curso que permite desenvolver coleçoes de dados no MongoDB',
   // difficulty: 3,
//  topics: ['Javascript', 'Servidores', 'Middlewares', 'Database'],
   //  professor: 'Jeni'
 //});

   //Encontra um aluno específico pelo ID e adiciona um curso a ele
  // let student = await studentModel.find({_id:"66187462e84a92599e783374"});
  // student[0].courses.push({course:"661875a8fb4dee2cd599b351"});
  // let result = await studentModel.updateOne({_id:"66187462e84a92599e783374"}, student[0]);
  // console.log(result);

  // Encontra um aluno específico pelo ID e popula os cursos associados a ele
  let student = await studentModel.find({_id:"66187462e84a92599e783374"})
  console.log(JSON.stringify(student, null, '\t'));
};

// Chama a função environment para executar as operações no banco de dados
environment();
