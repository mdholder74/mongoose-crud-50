require ('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const conn = require('./config/db');
conn();
const starterFruits = require('./config/seed');
const Fruit = require('./models/fruit');

app.get('/', (req, res) => {
    res.send('Home Page!');
});

app.get('/fruits/seed', async (req, res) => {
    try{
        await Fruit.deleteMany({});
        await Fruit.create(starterFruits);
        res.json(starterFruits);

    } catch (error) {
        
        console.log(`Somthing went wrong: ${error.message}`);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});