const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    return res.json({ message: 'Hello World!' });
  },

  async store(req, res) {
    try {
      const { github_username, techs, latitude, longitude } = req.body;

      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, bio, avatar_url } = apiResponse.data;

      const techsArray = techs.split(',').map(tech => tech.trim());

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };

      const response = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArray,
        location
      });

      return res.json(response);
    } catch (err) {
      console.log(err);
      return res.status(500); //.send(err);
    }
  }
};
