const supertest = require('supertest');
const app = require('../index');

describe('Testing  API', () => {
  it('tests the base route and returns true for status', async () => {
    const response = await supertest(app).post('/', {
      id: 'd5fa_asz',
      firstName: 'Maria',
      lastName: 'alshaabi',
      email: 'mariya@gmail.com',
    });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
  });
});
