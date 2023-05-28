"use strict";

const mongoose = require('mongoose');


const perguntastSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    apelido:{
        type: String,
        required: true,
        trim: true
    },
    resolvido:{
        type: Boolean,
        required: true,
        default: false
    },
    CreateDate:{
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Perguntas', perguntastSchema); 