const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    return res.json({ message: 'Hello World!' });
  },

  async store(req, res) {
    try {
      const { github_username } = req.body;

      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      // const response = await Dev.create(req.body);

      console.log(apiResponse.data);
      // return res.send(response);
      return res.send(apiResponse.data);
    } catch (err) {
      // console.log(err);
      return res.status(500); //.send(err);
    }
  }
};
