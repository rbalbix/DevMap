const request = require('supertest');

const app = require('../../src/app');
const db = require('../../src/database');

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
    const response = await request(app).get(
      '/search?latitude=-22.8945253&longitude=-43.1843926&techs=React, Node'
    );
    expect(response.status).toBe(200);
  });

  it('should find devs by this filter', async () => {
    const dev = {
      github_username: 'rbalbix',
      techs: 'React, Node, React Native',
      latitude: -22.8945253,
      longitude: -43.1843926
    };

    await request(app)
      .post('/devs')
      .send(dev);

    const response = await request(app).get(
      '/search?latitude=-22.8945253&longitude=-43.1843926&techs=React'
    );

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('github_username');
    expect(response.body[0]).toHaveProperty('bio');
    expect(response.body[0]).toHaveProperty('avatar_url');
    expect(response.body[0]).toHaveProperty('techs');
    expect(response.body[0]).toHaveProperty('location');
  });

  it('should not find devs by this filter', async () => {
    const dev = {
      github_username: 'rbalbix',
      techs: 'React, Node, React Native',
      latitude: -22.8945253,
      longitude: -43.1843926
    };

    await request(app)
      .post('/devs')
      .send(dev);

    const response = await request(app).get(
      '/search?latitude=-22.8945253&longitude=-43.1843926&techs=Pascal'
    );

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
  });
});
