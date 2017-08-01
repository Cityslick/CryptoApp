const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello world! The time is ${Date()}`);
})

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

