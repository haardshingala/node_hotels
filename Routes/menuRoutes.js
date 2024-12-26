const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

router.post("/", async(req, res) =>{
    try {
        const data = req.body;
        const newItem = new MenuItem(data);

        const response = await newItem.save();
        console.log("data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

router.get("/", async (req, res)=>{
    try {
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
})

router.get("/:taste", async (req, res)=>{
    try {
        const taste = req.params.taste;
        if(taste=="sweet" || taste=="sour" || taste=="spicy"){
            const data = await MenuItem.find({taste:taste});
            console.log("data fetched");
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error: "invalid taste"});
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
})


module.exports = router;
