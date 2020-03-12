const DevController = require('./app/controllers/DevController');

const routes = require('express').Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;
