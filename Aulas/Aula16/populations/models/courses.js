// Importar a biblioteca mongoose, que é uma biblioteca do Node.js para modelar objetos MongoDB
const mongoose = require('mongoose');

// Definir o nome da coleção no banco de dados onde os cursos serão armazenados
const courseCollection = 'courses';

// Definir o esquema de curso usando o mongoose.Schema
const courseSchema = new mongoose.Schema({
  // Campo title do tipo String para o título do curso
  title: String,
  
  // Campo description do tipo String para a descrição do curso
  description: String,
  
  // Campo difficulty do tipo Number para indicar a dificuldade do curso
  difficulty: Number,
  
  // Campo topics do tipo Array para os tópicos abordados no curso
  topics: {
    type: Array,
    default: [] // Valor padrão é um array vazio
  },
  
  // Campo professor do tipo String para o nome do professor que ministra o curso
  professor: String,
  
  // Campo students do tipo Array para armazenar os IDs dos alunos que estão matriculados no curso
  students: {
    type: Array,
    default: [] // Valor padrão é um array vazio
  }
});

// Criar um modelo de curso com o esquema definido
const courseModel = mongoose.model(courseCollection, courseSchema);

// Exportar o modelo de curso para uso em outros arquivos
module.exports = courseModel;
