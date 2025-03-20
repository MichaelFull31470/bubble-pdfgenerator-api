const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/generate-jwt', (req, res) => {
  const payload = {
    iss: process.env.PDF_API_KEY,
    exp: Math.floor(Date.now() / 1000) + 60,
  };

  const token = jwt.sign(payload, process.env.PDF_API_SECRET);
  res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));

