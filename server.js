const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, welcome to My Sabbath Backend!');
});

app.listen(PORT, () => {
    console.log(`My Sabbath Backend is running on http://localhost:${PORT}`);
});
