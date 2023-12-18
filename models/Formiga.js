const conexao = require('../config/conexao.js')


const FormigaSchema = new conexao.Schema({
    nome: String,
    raca: String,
    desempenho: Number
 })


module.exports = conexao.model('Formiga', FormigaSchema);