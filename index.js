const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipe.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('yumpies is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chefInfo = chefs.find(chef => chef.id == id);
    res.send(chefInfo);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const chefsRecipe = recipes.filter(r => r.chef_id == id);
    res.send(chefsRecipe);
})


app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})