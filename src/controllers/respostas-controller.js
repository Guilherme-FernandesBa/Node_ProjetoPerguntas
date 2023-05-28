'use strict';
const ValidationContract = require('../validators/fluent-validator')
const repository = require('../repository/respostas-repository');

exports.responder = async (req, res, next) => {
    try {
        console.log(req.body);
        await repository.createProduct(req.body)
        res.redirect("/pergunta_escolhida/"+req.body.PerguntaId)
    } catch (err) {
        console.log("[ERROR] " + err +"\n" + err.message);
        res.render("erro");
    };
}
