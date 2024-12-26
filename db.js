const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/hotels";

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
