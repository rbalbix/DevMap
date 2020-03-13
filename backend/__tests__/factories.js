const faker = require('faker/locale/pt_BR');
const { factory } = require('factory-girl');
const dev = require('../src/app/models/Dev');

factory.define('Dev', dev, {
  github_username: faker.internet.userName()
  // techs: faker.lorem.words(3).replace(/ /gi, ',')
});

module.exports = factory;
