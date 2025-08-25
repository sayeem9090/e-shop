const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to E-Shop');
  });
});
