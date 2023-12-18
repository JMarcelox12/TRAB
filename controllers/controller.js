const Cliente = require("../models/Cliente");
const Formiga = require("../models/Formiga");
const Aposta = require("../models/Aposta");
const Sala = require("../models/Sala");

function abreindex(req, res) {
  res.render("index");
}

function abreaddcliente(req, res) {
  console.log("Rota /add cliente");
  res.render("addcliente");
}

function addcliente(req, res) {
  console.log(req.body);
 
  let nome = req.body.nome;
  let email = req.body.email;
  let senha = req.body.senha;
  let cpf = req.body.cpf;

  let cliente = new Cliente({
    
    nome: nome,
    email: email,
    senha: senha,
    cpf: cpf,
  });

  cliente.save().then(function (docs) {
    console.log("Cliente criado!");
    res.render("index");
  });
}

function lstcliente(req, res) {
  console.log("Rota /Lista Cliente");
  Cliente.find().then(function (clientes, err) {
    if (err) {
      console.error("Erro ao salvar a formiga:", err);
      res.status(500).send("Erro interno do servidor");
    } else {
      console.log("Listando clientes...");
      res.render("lstcliente", { clientes: clientes });
    }
  });
}



function abreaddformiga(req, res) {
  res.render("addformiga");
}

function addformiga(req, res) {
  console.log(req.body);

  let nome = req.body.nome;
  let raca = req.body.raca;
  let desempenho = req.body.desempenho;


  let formiga = new Formiga({
    nome: nome,
    raca: raca,
    desempenho: desempenho,
  });

  formiga.save().then(function (formiga) {
      console.log("Formiga adicionada com sucesso!");
      res.render("lstformiga");
  });
}

function lstformiga(req, res) {
  console.log("Rota /Lista Formiga");
  Formiga.find().then(function (formigas, err) {
    if (err) {
      console.error(err.message);
      res.send(err.message);
    } else {
      console.log("Lista encontrada: ", formigas);
      res.render("lstformiga", { Formiga: formigas });
    }
  });
}

function pesquisaformiga(req, res) {
  Formiga.find({ nome: new RegExp(req.body.pesquisar, "i") }).then(function (pacientes,err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstformiga.ejs", { Formigas: formigas });
    }
  });
}

function abreedtformiga(req, res) {
  Formiga.findById(req.parms.id).then(function (formiga, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtformiga.ejs", { Formigas: formiga });
    }
  });
}

function edtformiga(req, res) {
  console.log("Rota /Editar Formiga");
  Formiga.findByIdAndUpdate(req.params.id, {
    nome: req.body.nome,
    raca: req.body.raca,
    desempenho: req.body.desempenho,
  }).then(function (formiga, err) {
    if (err) {
      res.send(err.message);
    } else {
      console.log("Editando...");
      res.redirect("/edtformiga");
    }
  });
}

function delformiga(req, res) {
  console.log("Deletando formiga...");
  Formiga.findByIdAndDelete(req.params.id).then(function (formigas, err) {
    if (err) {
      res.send(err.message);
    } else {
      console.log("Formiga deletada");
      res.redirect("/lstformiga");
    }
  });
}

function abreaddaposta(req, res) {
    console.log("Rota /Criando aposta")
  Aposta.find().then(function (apostas, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("addaposta", { Apostas: apostas });
    }
  });
}

function addaposta(req, res) {
  let aposta = new Aposta({

    formiga: req.body.formiga,
    dataehora: new Date(),
    valor: req.body.valor,
  });
  aposta.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/addaposta");
  });
}

function lstaposta(req, res) {
  Aposta.find()
    .populate("aposta")
    .then(function (consultas, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstaposta.ejs", { Apostas: apostas });
      }
    });
}

function pesquisaaposta(req, res) {
  Aposta.find({ nome: new RegExp(req.body.pesquisar, "i") }).then(function (
    formigas,
    err
  ) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstformiga.ejs", { Formigas: formigas });
    }
  });
}

function abreedtaposta(req, res) {
  Aposta.findById(req.params.id).then(function (formiga, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtformiga.ejs", { Formiga: formiga });
    }
  });
}

function edtaposta(req, res) {
  console.log("Editando aposta...");
  Aposta.findByIdAndUpdate(req.params.id, {
    nome: req.body.codigo,
    endereco: req.body.formiga,
    dataehora: req.body.dataehora,
    valor: req.body.valor,
    odd: req.body.valor,
  }).then(function (formiga, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstformiga");
    }
  });
}

function delaposta(req, res) {
  console.log("Deletando aposta...");
  Formiga.findByIdAndDelete(req.params.id).then(function (formigas, err) {
    if (err) {
      res.send(err.message);
    } else {
      console.log("Aposta deletada");
      res.redirect("/lstformiga");
    }
  });
}

function delcliente(req, res) {
  console.log("Deletando cliente...");
  Cliente.findByIdAndDelete(req.params.id).then(function (clientes, err) {
    if (err) {
      res.send(err.message);
    } else {
      console.log("Cliente deletada");
      res.redirect("/lstcliente");
    }
  });
}

function sala1(req, res) {
  console.log("Rota /sala1");

  Sala.find()
    .populate("sala")
    .then(function (salas, err) {
      if (err) {
        console.error(err.message);
        res.send(err.message);
      } else {
        console.log("Formigas encontradas:");
        res.render("sala1", { Sala: salas });
      }
    });
}

function sala2(req, res) {
  console.log("Rota /sala2");

  Formiga.find().then(function (formigas, err) {
      if (err) {
        console.error(err.message);
        res.send(err.message);
      } else {
        console.log("Formigas encontradas:", formigas);
        res.render("sala2", { Formigas: formigas });
      }
    });
}

function sala3(req, res) {
  console.log("Rota /sala3");

  Formiga.find().then(function (formigas, err) {
      if (err) {
        console.error(err.message);
        res.send(err.message);
      } else {
        console.log("Formigas encontradas:", formigas);
        res.render("sala3", { Formigas: formigas });
      }
    });
}

function abreaddsala(req, res) {
  console.log("Rota /Abrindo as sala...");
  res.render("addsala");
}

function addsala(req, res) {
  console.log("Rota /Criando sala...");
  let codigo = req.body.codigo;
  let nome = req.body.nome;

  let sala = new Sala({
    codigo: codigo,
    nome: nome,
  });

  Sala.save().then(function (docs) {
    console.log("Sala criada!");
    res.render("index");
  });
}

function edtcliente(req, res){
  Cliente.findById(req.params.id).then(function(clientes, err){
    if(err){
      res.send(err);
    }else{
      cliente.save().then(function(clientes, err){
        if(err){
          res.send(err);
        }else{
          res.redirect('/lstcliente');
        }
      })
    }
  })
}

module.exports = {
  abreindex,
  abreaddcliente,
  addcliente,
  lstcliente,
  abreaddformiga,
  addformiga,
  lstformiga,
  pesquisaformiga,
  delformiga,
  abreedtformiga,
  edtformiga,
  abreaddaposta,
  addaposta,
  lstaposta,
  pesquisaaposta,
  delaposta,
  delcliente,
  edtcliente,
  abreedtaposta,
  edtaposta,
  sala1,
  sala2,
  sala3,
  abreaddsala,
  addsala,
};
