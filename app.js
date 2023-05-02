const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Word!' "I'm feeling you Teddy!!!"));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
