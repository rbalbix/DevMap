const { Schema, model } = require('../../database').mongoose;

const DevSchema = Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String]
});

module.exports = model('Dev', DevSchema);
