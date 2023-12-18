const conexao = require('../config/conexao.js')

const ClienteSchema = new conexao.Schema({
    nome: String,
    email: String,
    senha: String,
    cpf: String
})

module.exports = conexao.model('Cliente',ClienteSchema)