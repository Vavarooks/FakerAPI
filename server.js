const {faker} = require('@faker-js/faker');
const express = require('express');
const Company = require('./classes/Company');
const FakeUser = require('./classes/FakeUser');
const app = express();

app.get("/api/user/new", (req,res) =>{
    console.log("Server Accessed");
    // const newFake = new FakeUser;
    res.json( new FakeUser());
})

app.get("/api/company/new", (req,res) =>{
    console.log("Server Accessed");
    // const newFake = new FakeUser;
    res.json( new Company());
})

app.get("/api/user/company", (req,res) =>{
    console.log("Server Accessed");
    // const newFake = new FakeUser;
    res.json({"company" : new Company(), 
        "faker" : new FakeUser()});
})

app.listen(8008, () => {
    console.log("Running on port 8008");
});