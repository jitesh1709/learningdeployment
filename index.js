const express = require('express');

const app = express()

const port = 3000
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

app.get('/', (req, res) => {
    const response = {
        msg: 'Successfully connected to server.',
        status: 200
    }
    res.status(200).send(response)
})

app.get('/get/data', (req, res) => {
    res.status(200).send([
        { id: 1, data: 20 },
        { id: 2, data: 30 }
    ])
})
