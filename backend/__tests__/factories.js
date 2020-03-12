const faker = require('faker');
const { factory } = require('factory-girl');
const dev = require('../src/app/models/Dev');

factory.define('Dev', dev, {
  name: faker.name.findName()
});

module.exports = factory;
