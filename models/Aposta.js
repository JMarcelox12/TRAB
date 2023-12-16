const conexao = require('../config/conexao.js')

const ApostaSchema = new conexao.Schema({
    codigo: Number,
    formiga:{
        type: conexao.Schema.Types.ObjectId,
        ref: "Formiga"
    },
    dataEhora: Number,
    valor: Number,
    ODD: String,
    cliente:{
        type: conexao.Schema.Types.ObjectId,
        ref: "Cliente"
    }
})

module.exports = conexao.model('Aposta', ApostaSchema)