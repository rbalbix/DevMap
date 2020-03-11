const routes = require('express').Router();

routes.get('/devs', async (req, res) => {
  return res.json({ message: 'Hello World!' });
});

routes.post('/devs', async (req, res) => {
  return res.json({ message: 'POST' });
});

module.exports = routes;
