const express = require('express');
const { json } = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json([
        { name: 'Bruno' },
        { name: 'Fernanda' },
    ])
})

app.listen('4567')
