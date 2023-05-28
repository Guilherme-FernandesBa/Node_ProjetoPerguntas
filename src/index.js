"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');


//conecta ao banco 
const connectionString =process.env.CONNECTION_STRING
const conection = async () => {
        await mongoose.connect(connectionString);
}
try{
    conection();
    console.log("Conectado com Sucesso banco!")

}catch(e){
    console.log(`[ERRO] ----- Menssagem de Error:\n   ${e}`);
}


const app = express();
const router = express.Router();

// Carrega os models
const Perguntas = require('./models/perguntas')
const Respostas = require('./models/resposta')



//Configurações
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Carregando as rotas
const indexRoute = require('./routes/index-route');
const perguntasRoute = require('./routes/perguntas-route');
const respostasRoute = require('./routes/respostas-routes');


app.use('/verifica_versao', indexRoute);
app.use('/', perguntasRoute)
app.use('/', respostasRoute)



module.exports = app;
