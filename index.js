const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const chefs = require('./data/chefs.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('yumpies is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chefInfo = chefs.find(chef => chef.id == id);
    res.send(chefInfo);
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})