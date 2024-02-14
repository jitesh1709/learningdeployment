const express = require('express');

const app = express()

const port = 24
app.listen(port, '0.0.0.0', () => {
    console.log(`Started on port ${port}`);
});

app.get('/get/data', (req, res) => {
    res.status(200).send('Response sent to the client')
})
