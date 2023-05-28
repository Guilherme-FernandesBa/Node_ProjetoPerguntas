"use strict";
const mongoose = require('mongoose');
const Respostas = mongoose.model('Respostas');



exports.createProduct = async(data) => {
    var respostas = new Respostas(data);
    await  respostas.save();
}
    