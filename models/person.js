const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String
    },
    work: {
        type: String,
        enum: ['chef', 'waiter','manager'],  // value must be either of three
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
    },
    salary:{
        type: Number,
        required: true
    }
});

// creating model
const Person = mongoose.model("Person",personSchema);

module.exports = Person;