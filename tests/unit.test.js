//// tests/unit.test.js
test('adds 2 + 3 to equal 5', () => {
  const add = (a, b) => a + b;
  expect(add(2, 3)).toBe(5);
});