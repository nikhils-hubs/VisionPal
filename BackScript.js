const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const groqAPI = require('./groqAPI');

app.use(express.json());
app.use(express.static(__dirname));

// Routes for pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/accessGrant', (req, res) => {
  res.sendFile(path.join(__dirname, 'acessGrant.html'));
});
app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Mount Groq API
const groqRoutes = require('./groqAPI'); // or whatever the file name is
app.use('/api', groqRoutes);

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
