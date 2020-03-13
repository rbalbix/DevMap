const request = require('supertest');

const app = require('../../src/app');
const db = require('../../src/database');

const factory = require('../factories');

// Categoria dos testes
describe('Devs', () => {
  beforeAll(async done => {
    db.connect();
    await db.truncate();
    db.disconnect(done);
  });

  beforeEach(() => {
    db.connect();
  });

  afterEach(done => {
    db.disconnect(done);
  });

  it('should find a /search (GET) route', async () => {
    const response = await request(app).get('/search');

    expect(response.status).toBe(200);
  });

  // TEST FILTERS os index method
});
