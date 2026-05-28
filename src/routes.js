const express = require('express');

const prodControllers = require('./prodControllers/prodcontrollers');
const routes = express.Router();

routes.get('/', prodControllers.raiz);
routes.get('/Produtos', prodControllers.produtos);

module.exports = routes;