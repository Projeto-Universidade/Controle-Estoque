const express = require('express');
const ProdutoController = require('./controllers/ProdutoController');
const routes = express.Router();

routes.get('/produto', ProdutoController.index);
routes.post('/produto', ProdutoController.create);
routes.delete('/produto/:nome', ProdutoController.delete);

module.exports = routes;