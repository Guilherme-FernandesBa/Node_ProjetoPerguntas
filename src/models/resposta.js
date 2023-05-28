"use strict";

const mongoose = require('mongoose');


const respostastSchema = new mongoose.Schema({
    corpo:{
        type: String,
        required: true,
    },
    PerguntaId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Pergunta',
        required: true
    },
    CreateDate:{
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Respostas', respostastSchema); 