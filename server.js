const {faker} = require('@faker-js/faker');
const express = require('express');
const Fake = require('./classes/Fake');
const app = express();

app.get("/", (req,res) =>{
    console.log("Server Accessed");
    res.json( new Fake());
})

app.listen(8008, () => {
    console.log("Connected");
});