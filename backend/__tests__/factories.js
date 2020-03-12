const faker = require('faker/locale/pt_BR');
const { factory } = require('factory-girl');
const dev = require('../src/app/models/Dev');

factory.define('Dev', dev, {
  // name: faker.name.findName(),
  github_username: faker.internet.userName()
  // bio: faker.lorem.sentence(),
  // avatar_url: faker.internet.avatar(),
  // techs: faker.lorem.words(3)
});

module.exports = factory;
