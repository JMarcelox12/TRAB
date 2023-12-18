const conexao = require("../config/conexao.js");

const SalaSchema = new conexao.Schema({
  codigo: String,
  cliente: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Cliente",
  },
  formiga: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Formiga",
  },
  aposta: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Aposta",
  },
});

module.exports = conexao.model("Sala", SalaSchema);
