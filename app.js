//// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// Sample route
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to MyApp</h1>`);
});


// API route
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Add this function
function add(a, b) {
  return a + b;
}

// Export both app and the function
module.exports = { app, add };

// Start server only if run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
