const mongoose = require('mongoose');

const DevSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Dev', DevSchema);
