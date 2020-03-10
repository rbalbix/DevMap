const request = require('supertest');

const app = require('../../src/app');
// const truncate = require('../utils/truncate');
// const factory = require('../factories');

// Categoria dos testes
describe('Devs', () => {
  // beforeEach(async () => {
  //   await truncate();
  // });

  it('should return a success status 200', async () => {
    // const user = await factory.create('User', {
    //   password: '123123'
    // });

    const response = await request(app).get('/devs');

    expect(response.status).toBe(200);
  });
});
