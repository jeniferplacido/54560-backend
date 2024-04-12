// Importar a biblioteca mongoose, que é uma biblioteca do Node.js para modelar objetos MongoDB
const mongoose = require('mongoose');

// Definir o nome da coleção no banco de dados onde os alunos serão armazenados
const studentCollection = 'students';

// Definir o esquema de usuário usando o mongoose.Schema
// Um esquema é uma descrição da estrutura dos documentos em uma coleção MongoDB
const studentSchema = new mongoose.Schema({
  // Campo first_name do tipo String com um índice criado para otimizar consultas
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  courses:{
    type: [
        {   course:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'courses'
        }
    }
    ],
    default: []
  }
});
studentSchema.pre('find',function(){
  this.populate('courses.course');
})
const studentModel = mongoose.model(studentCollection, studentSchema);


module.exports = studentModel;
