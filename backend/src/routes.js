const DevController = require('./app/controllers/DevController');
const SearchController = require('./app/controllers/SearchController');

const routes = require('express').Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
