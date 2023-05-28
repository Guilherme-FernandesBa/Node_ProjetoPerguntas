"use strict";
const express = require('express');
const router = express.Router();
const controller = require('../controllers/perguntas-controller');

router.get('/',controller.home);
router.get('/perguntar', controller.perguntar)
router.post('/enviar_pergunta', controller.enviar_perguntar)
router.get('/pergunta_escolhida/:id', controller.pergunta_escolhida)

module.exports = router;