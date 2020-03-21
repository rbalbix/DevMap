const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../../websocket');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    try {
      const { github_username, techs, latitude, longitude } = req.body;

      let dev = await Dev.findOne({ github_username });

      if (!dev) {
        const apiResponse = await axios.get(
          `https://api.github.com/users/${github_username}`
        );

        const { name = login, bio, avatar_url } = apiResponse.data;

        const techsArray = parseStringAsArray(techs);

        const location = {
          type: 'Point',
          coordinates: [longitude, latitude]
        };

        dev = await Dev.create({
          name,
          github_username,
          bio,
          avatar_url,
          techs: techsArray,
          location
        });

        // Filtrar as conexões que estão a no máximo 10km de distância e
        // que o dev tenha pelo menos uma das tecnologias filtradas.
        const sendSocketMessageTo = findConnections(
          { latitude, longitude },
          techsArray
        );

        sendMessage(sendSocketMessageTo, 'new-dev', dev);
      }

      return res.json(dev);
    } catch (err) {
      console.log(err);
      return res.status(500); //.send(err);
    }
  }
};
