const request = require('supertest');

const app = require('../../src/app');
const mongoDB = require('../../src/database');

const factory = require('../factories');

// Categoria dos testes
describe('Devs', () => {
  beforeEach(() => {
    mongoDB.connect();
  });

  afterEach(done => {
    mongoDB.disconnect(done);
  });

  it('should find a /devs (GET) route', async () => {
    const response = await request(app).get('/devs');

    expect(response.status).toBe(200);
  });

  it('should create a Dev /devs (POST)', async () => {
    const dev = await factory.create('Dev');

    const response = await request(app)
      .post('/devs')
      .send({
        dev
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
  });
});
