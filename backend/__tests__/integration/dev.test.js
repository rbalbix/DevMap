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

  it('should find a /devs (GET) route', async () => {
    const response = await request(app).get('/devs');

    expect(response.status).toBe(200);
  });

  it('should create a Dev /devs (POST)', async () => {
    // const dev = await factory.build('Dev', {
    //   github_username: 'rbalbix',
    //   technologies: 'React, Node, React Native'
    // });

    const dev = {
      github_username: 'rbalbix',
      techs: 'React, Node, React Native',
      latitude: -22.8945253,
      longitude: -43.1843926
    };

    const response = await request(app)
      .post('/devs')
      .send(dev);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('github_username');
    expect(response.body).toHaveProperty('bio');
    expect(response.body).toHaveProperty('avatar_url');
    expect(response.body).toHaveProperty('techs');
    expect(response.body).toHaveProperty('location');
  });

  it('should not create an existent Dev', async () => {
    const dev = {
      github_username: 'rbalbix',
      techs: 'React, Node, React Native',
      latitude: -22.8945253,
      longitude: -43.1843926
    };

    const response = await request(app)
      .post('/devs')
      .send(dev);

    const duplicate = await request(app)
      .post('/devs')
      .send(dev);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(duplicate.body._id);
  });
});
