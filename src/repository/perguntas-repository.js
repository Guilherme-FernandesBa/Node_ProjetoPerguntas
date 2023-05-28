"use strict";
const mongoose = require('mongoose');
const Perguntas = mongoose.model('Perguntas');
const Respostas = mongoose.model('Respostas');



exports.getAll = async () => {
    const response = await Perguntas.find();
    return response
}


exports.create = async(data) => {
    var product = new Perguntas(data);
    await  product.save();
    
}
exports.getById = async(id) => {
    const response = await Perguntas.findById(id);
    return response
}

exports.respostas = async(id) => {
    const query = {   PerguntaId: id };
    const response = await Respostas.find(query);
    return response
}