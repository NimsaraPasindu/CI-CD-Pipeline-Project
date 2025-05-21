//// tests/integration.test.js
const request = require('supertest');
const express = require('express');
const app = require('../app');

test('GET /api/users returns users list', async () => {
  const res = await request(app).get('/api/users');
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});