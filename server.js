const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api-routes');
require('dotenv/config');

const app = express();
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(cors());
app.use('/verify', apiRoutes); 

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true },() => {
    console.log("CONNECTED TO DB");
});

app.get('/', function(req, res) {
    res.send("Welcome!");
})

app.get('*', function(req, res) {
    res.send("404 Not Found!");
})

app.listen(3000, () => {
    try {
        console.log("200 OK");
    } catch (err) {
        res.json({message:err});
    }
});
