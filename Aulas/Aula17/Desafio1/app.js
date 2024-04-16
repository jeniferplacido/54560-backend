const mongoose = require('mongoose');
const User = require('./model/aluno');

const environment = async () => {
//    try{
    await mongoose.connect('mongodb+srv://pag:pag@cluster0.srs49pv.mongodb.net/');
    console.log('Conectado ao MongoDB');

//     const melhorAtePior = await User.aggregate([
//         { $sort: { grade: -1 } },
//         { $group: { _id: null, alunos: { $push: '$$ROOT' } } }
//     ]);

//     const porGrupo = await User.aggregate([
//         { $group: { _id: '$grupo', alunos: { $push: '$$ROOT' } } }
//     ]);

//     const mediaGrupo1B = await User.aggregate([
//         { $match: { grupo: '1B' } },
//         { $group: { _id: null, media: { $avg: '$grade' } } }
//     ]);

//     const mediaGrupo1A = await User.aggregate([
//         { $match: { grupo: '1A' } },
//         { $group: { _id: null, media: { $avg: '$grade' } } }
//     ]);

//     const mediaGeral = await User.aggregate([
//         { $group: { _id: null, media: { $avg: '$grade' } } }
//     ]);

//     const mediaHomens = await User.aggregate([
//         { $match: { genero: 'Masculino' } },
//         { $group: { _id: null, media: { $avg: '$grade' } } }
//     ]);

//     const mediaMulheres = await User.aggregate([
//         { $match: { genero: 'Feminino' } },
//         { $group: { _id: null, media: { $avg: '$grade' } } }
//     ]);

//     console.log('Alunos agrupados por classificação (do melhor ao pior):', melhorAtePior[0].alunos);
//     console.log('Alunos agrupados por grupo:', porGrupo);
//     console.log('Média dos alunos do grupo 1B:', mediaGrupo1B[0].media);
//     console.log('Média dos alunos do grupo 1A:', mediaGrupo1A[0].media);
//     console.log('Média geral dos alunos:', mediaGeral[0].media);
//     console.log('Média de notas dos homens:', mediaHomens[0].media);
//     console.log('Média de notas das mulheres:', mediaMulheres[0].media);
// } catch (err) {
//     console.error('Erro ao executar consultas:', err);
// }
// };

//     try {
//         const alunos = [
//             {
//                 primeiroNome: 'João',
//                 ultimoNome: 'Silva',
//                 email: 'joao.silva@example.com',
//                 genero: 'Masculino',
//                 grade: 8.5,
//                 grupo: '1A'
//             },
//             {
//                 primeiroNome: 'Maria',
//                 ultimoNome: 'Santos',
//                 email: 'maria.santos@example.com',
//                 genero: 'Feminino',
//                 grade: 9.0,
//                 grupo: '1B'
//             },
//             {
//                 primeiroNome: 'Pedro',
//                 ultimoNome: 'Oliveira',
//                 email: 'pedro.oliveira@example.com',
//                 genero: 'Masculino',
//                 grade: 7.2,
//                 grupo: '1A'
//             },
//             // Adicione mais alunos conforme necessário
//         ];

//         const result = await User.insertMany(alunos);
//         console.log('Alunos inseridos no banco de dados:', result);
//     } catch (err) {
//         console.error('Erro ao inserir alunos:', err);
//     }
// };

environment();
