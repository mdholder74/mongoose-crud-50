const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruit');//importing the fruit model this comes from the fruit.js file in the models folder

// This has to be async because we are using the await keyword
router.get('/', async (req, res) => {
    try {
        const allFruits = await Fruit.find({});//finding all the fruits in the database.
        res.json(allFruits); // Using res.json to send the data back to the client. 
    } catch (error) {
        console.log(`Somthing went wrong: ${error.message}`);
    }
});

router.post('/', async (req, res) => {
    try {
        const createdFruit = await Fruit.create(req.body);//creating a new fruit in the database
        console.log(req.body);
        res.json(createdFruit);//sending the created fruit back to the client
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const foundFruit = await Fruit.findById(req.params.id);//finding a fruit by its id
        res.json(foundFruit);//sending the found fruit back to the client
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});





module.exports = router;//exporting the router