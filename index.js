const express = require('express');

const app = express()
 
app.listen(3000, () => {
    console.log('Started on port 3000');
});

app.get('/get/data', (req, res) => {
    res.status(200).send('Response sent')
})
