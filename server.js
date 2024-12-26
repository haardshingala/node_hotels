const express = require("express");
const db = require("./db");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // makes parsed data available in req.body for further processing


app.get("/", (req, res) =>{
    res.send("Welcome to my Hotel!");
})

// app.post("/person", (req, res) =>{
//     const data = req.body; // assuming the request body contains the person data

//     const newPerson = new Person(data); // create a newPerson document using the mongoose model

//     //save the new person to the database
//     newPerson.save((error, savedPerson) =>{ //used callback but deprecated now
//         if(error){
//             console.log("Error saving the person", error);
//             res.status(500).json({error: "internal server error"});
//         }
//         else{
//             console.log("data saved successfully");
//             res.status(200).json(savedPerson);
//         }
//     })

// })




// parametrized api

const personRoutes = require("./Routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./Routes/menuRoutes");
app.use("/menu",menuRoutes);

app.listen(PORT, ()=>{console.log(`listening on port: ${PORT}`)});

