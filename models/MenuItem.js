const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    taste:{
        type: String,
        enum: ['sweet','spicy','sour'],
        required: true,
    },
    is_drink:{
        type: Boolean,
        default: false, // if not given then value in default will be considered
    },
    ingredients:{
        type: [String], // arr of str
        default: []
    },
    num_sales:{
        type: Number,
        default: 0,
    }
})

const MenuItem = new mongoose.model("MenuItem",menuItemSchema);

module.exports = MenuItem;