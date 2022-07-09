const request = require('supertest');

const app = require('../server');


let elementId;

describe('Test example', () => {
  test('GET /', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        res.body.data.length = 1;
        res.body.data[0].note = 'test@example.com';
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('POST /send', (done) => {
    request(app)
      .post('/send')
      .expect('Content-Type', /json/)
      .send({
        email: 'francisco@example.com',
      })
      .expect(201)
      .expect((res) => {
        res.body.data.length = 2;
        res.body.data[0].email = 'test@example.com';
        res.body.data[1].email = 'francisco@example.com';
      })
      .end((err, res) => {
        if (err) return done(err);
        elementId = res.body.data[1].id;
        return done();
      });
  });

});




// describe('Testing  API', () => {
//   it('tests the base route and returns true for status', async () => {
//     const response = await supertest(app).post('/api/users', {
//       name: 'mariya',
//       email: 'mariya@gmail.com',
//       password: '1234',
//     });

//     expect(response.status).toBe(200);
//     expect(response.body.status).toBe(true);
//   });
// });
