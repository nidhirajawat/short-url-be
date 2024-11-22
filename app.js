// require('dotenv').config({ path: './.env.dev' }); // Ensure this points to your .env file

const express = require('express');
const app = express();

const hostname = process.env.HOSTNAME ?? "localhost";
const port = process.env.PORT ?? "5000";

//Middlewares

//Connrcting with Database

//GET //Routes
app.get('/', (req, res) => {
    res.send('Heloooo worldd');
})

//server start process

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
