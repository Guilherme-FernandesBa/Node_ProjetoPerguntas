'use strict';
const ValidationContract = require('../validators/fluent-validator')
const repository = require('../repository/perguntas-repository');


exports.home = async (req, res, next) => {
        try {
            var data = await repository.getAll();
            //Ordenar por data
            data.sort((a,b) => {
                return new Date(b.CreateDate) - new Date(a.CreateDate);
                });
            res.render("../views/index.ejs", {
                data: data
            });
        } catch (err) {
            console.log("[ERROR] " + err +"\n" + err.message);
            res.render("erro");
        }
}

exports.perguntar = async (req, res, next) => {
    res.render("perguntar");
}

exports.enviar_perguntar = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.isRequired(req.body.titulo, "O titulo é obrigatório");
    contract.isRequired(req.body.descricao, "A descricao é obrigatório");
    let apelido = req.body.titulo.replaceAll(' ', '-');
    req.body.apelido = apelido
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return
    }
    try {
        await repository.create(req.body)
        res.redirect('/');
    } catch (err) {
        console.log("[ERROR] " + err +"\n" + err.message);
        res.render("erro");
    }; 

}

exports.pergunta_escolhida = async (req, res, next) => {

    try {
        var data = await repository.getById(req.params.id)
        if(data != undefined && data != null) {
            var respostas = await repository.respostas(req.params.id)
            res.render("pergunta_escolhida", 
            {
                data: data,
                respostas: respostas
            
            }
            );
        }else{
            res.redirect('/');
        }
    } catch (err) {
        console.log("[ERROR] " + err +"\n" + err.message);
        res.render("erro");
    }
}





