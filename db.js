const mongoose = require("mongoose");
require('dotenv').config();

// const mongoURL = process.env.MONGO_URL_LOCAL // for local server
const mongoURL = process.env.MONGO_URL // link of onlone mongodb server

mongoose.connect(mongoURL,{
    // useNewUrlParser: true, commented as it was giving warning as deprecated 
    // useUnifiedTopology: true
})

// mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

db.on("connected", ()=>{  // connected, error, disconnected are event listeners keyword, it knows its meaning
    console.log("connected to MongoDB");
})

db.on("error", (err)=>{
    console.log("error while connecting to MongoDB", err);
})

db.on("disconnected", ()=>{
    console.log("disconnected to MongoDB");
})

module.exports = db;
