require ('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const conn = require('./config/db');
conn();
const starterFruits = require('./config/seed');
const Fruit = require('./models/fruit'); //importing the fruit model this comes from the fruit.js file in the models folder
const fruitRoutes = require('./routes/fruitRoutes'); //importing the fruitRoutes file from the routes folder

//middleware used with POST
app.use(express.json());//using express.json to parse the data from the client into json

//middleware used with GET
app.use('/api/fruits', fruitRoutes); //using the fruitRoutes file this allows us to use the routes in the fruitRoutes file




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