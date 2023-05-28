"use strict";
const express = require('express');
const router = express.Router();
const controller = require('../controllers/respostas-controller');


router.post('/responder',controller.responder );

module.exports = router;