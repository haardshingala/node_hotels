const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.post("/", async (req, res)=>{
    try {
        const data = req.body;    // assuming the request body contains the person data
        const newPerson = new Person(data);  // create a newPerson document using the mongoose model

        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

router.get("/", async (req, res)=>{
    try {
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
})

router.get("/:workType", async (req, res) =>{
    try{
        const workType = req.params.workType;
        if(workType=="chef" || workType=="waiter" || workType=="manager" ){
            const response = await Person.find({work: workType});
            console.log("response fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: "Invalid workType"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
})

//update

router.put("/:id", async (req,res)=>{  // here id is a variable passes in url so can be named  anything 
    try {
        const personId = req.params.id; // extract the id from the URL parameter // as id is sent through parameter
        const updatedPersonData = req.body; // data which was  sent through body

        const updatedPerson =await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new : true, // return the updated document
            runValidators: true, // run mongoose validation i.e. the validations that we passes like required:true, unique:true 
        })
        if(!updatedPerson){
            return res.status(404).json({error: "person not found"});
        }
        console.log("data updated");
        res.status(200).json(updatedPerson);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
})

//delete
router.delete("/:id", async (req,res)=>{
    try{
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if(!response){
        return res.status(404).json({error: "person not found"});
    }
    console.log("data deleted");
    res.status(200).json({message: "person deleted successfully"});
}
catch(err){
    console.log(err);
    res.status(500).json({error: "internal server error"});
}
})


module.exports = router;