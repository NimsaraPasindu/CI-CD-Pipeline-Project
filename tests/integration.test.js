const request = require('supertest');
const http = require('http');
const { app } = require('../app');

let server;

beforeAll((done) => {
  server = http.createServer(app).listen(done); // create real HTTP server
});

afterAll((done) => {
  server.close(done); // clean up after tests
});

test('GET /api/users returns users list', async () => {
  const res = await request(server).get('/api/users'); // test with the server, not just app
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});
