const Cliente = require('../models/Cliente')
const Formiga = require('../models/Formiga')
const Aposta = require('../models/Aposta')

function abreindex(req, res){
    res.render('index')
}

function abreaddcliente(req, res){
    res.render('add')
}

function addcliente(req, res){
    let nome = req.body.nome
    let email = req.body.email
    let senha = req.body.senha
    let cpf = req.body.cpf

    let cliente = new Cliente({
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf
    })

    cliente.save().then(function(docs){
        res.send("Salvo")
    })
}

function listar(req, res){
    Cliente.find({}).then(function(clientes){
        res.render('lstcliente.ejs',{clientes:clientes})
    })
}

function abreaddformiga(req, res){
    res.render('addformiga.ejs')
}

function addformiga(req, res){
    let formiga = new Formiga({
        nome: req.body.nome,
        raca: req.body.raca,
        desempenho: req.body.desempenho
    })
    formiga.save().then(function(docs,err){
        console.log(docs)
        res.redirect('/addformiga')
    })
}

function lstformiga(req, res){
    Formiga.find({}).then(function(formigas, err){
        if(err){
            res.send(err.message)
        }else{
            res.render('lstformiga.ejs',{Formigas:formigas})
        }
    })
}

function pesquisaformiga(req, res){
    Formiga.find({nome: new RegExp(req.body.pesquisar, "i")}).then(function(pacientes, err){
        if(err){
            res.send(err.message)
        }else{
            res.render('lstformiga.ejs',{Formigas: formigas})
        }
    })
}

function abreedtformiga(req, res){
    Formiga.findById(req.parms.id).then(function(formiga, err){
        if(err){
            res.send(err.message)
        }else{
            res.render('edtformiga.ejs',{Formigas:formiga})
        }
    })
}

function edtformiga(req, res){
    Formiga.findByIdAndUpdate(req.params.id,{
        nome: req.body.nome,
        raca: req.body.raca,
        desempenho: req.body.desempenho
    }).then(function(formiga, err){
        if(err){
            res.send(err.message);
        }else{
            res.redirect('/lstformiga');
        }
    })
}

function delformiga(req, res){
    Formiga.find({}).then(function(formigas, err){
        if(err){
            res.send(err.message)
        }else{
            res.redirect('/lstformiga')
        }
    })
}

function abreaddaposta(req, res){
    Consulta.find({}).then(function(formigas, err){
        if(err){
            res.send(err.message)
        }else{
            res.render('addaposta.ejs',{Formigas:formigas})
        }
    })
}

function addaposta(req, res){

    let aposta = new Aposta({
        codigo: req.body.codigo,
        formiga: req.body.formiga,
        dataehora: new Date(),
        valor: req.body.valor,
        odd: req.body.odd
    })
    aposta.save().then(function(docs,err){
        console.log(docs)
        res.redirect('/addaposta')
    })
}

function lstaposta(req, res){
    Aposta.find({}).populate('aposta').then(function(consultas,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('lstaposta.ejs',{Apostas:apostas})
        }
    })
}

function pesquisaaposta(req, res){
    Aposta.find({nome: new RegExp(req.body.pesquisar, "i")}).then(function(formigas, err){
        if(err){
            res.send(err.message)
        }else{
            res.render('lstformiga.ejs',{Formigas:formigas})
        }
    })
}

function abreedtaposta(req, res){
    Aposta.findById(req.params.id).then(function(formiga, err){
        if(err){
            res.send(err.message)
        }else{
            res.render('edtformiga.ejs',{Formiga:formiga})
        }
    })
}

function edtaposta(req, res){
    Aposta.findByIdAndUpdate(req.params.id, {
        nome: req.body.codigo,
        endereco: req.body.formiga,
        dataehora: req.body.dataehora,
        valor: req.body.valor,
        odd: req.body.valor
    }).then(function(formiga,err){
        if(err){
            res.send(err.message);
        }else{
            res.redirect('/lstformiga');
        }
    })
}

function delaposta(req, res){
    Formiga.findByIdAndDelete(req.params.id).then(function(formigas, err){
        if(err){
            res.send(err.message)
        }else{
            res.redirect('/lstformiga')
        }
    })
}

function sala1(req, res){
    Formiga.find({}).populate('formiga').then(function(formigas,err){
    if(err){
        res.send(err.message)
    }else{
        res.render('/sala1.ejs',{Formigas:formigas})
    }
    })
}

function sala2(req, res){
    Formiga.find({}).populate('formiga').then(function(formigas,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('/sala2.ejs',{Formigas:formigas})
        }
        })
}

function sala3(req, res){
    Formiga.find({}).populate('formiga').then(function(formigas,err){
        if(err){
            res.send(err.message)
        }else{
            res.render('/sala3.ejs',{Formigas:formigas})
        }
        })
}

module.exports = {
    abreindex,
    abreaddcliente,
    addcliente,
    listar,
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
    abreedtaposta,
    edtaposta,
    sala1,
    sala2,
    sala3
}