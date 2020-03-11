const request = require('supertest');

const app = require('../../src/app');
const mongoDB = require('../database/mongoDB');
// const truncate = require('../utils/truncate');
// const factory = require('../factories');

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

  it('should not found the user email', async () => {
    const Dev = mongoose.model('Dev', { name: String });

    const dev = new Dev({ name: 'Ricardo' });
    dev.save().then(() => console.log('Foi'));

    const response = await request(app)
      .post('/devs')
      .send({
        name: 'Ricardo'
      });

    expect(response.status).toBe(401);
  });
});
