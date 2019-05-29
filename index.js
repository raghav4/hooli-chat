const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Hooli Chat!');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on Port ${PORT}...`));