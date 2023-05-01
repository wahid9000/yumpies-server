const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

const chefs = require('./data/chefs.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('yumpies is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})