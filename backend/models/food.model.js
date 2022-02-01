const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const food_schema = new Schema({
    vendor_email:{
        type: String,
        required: true
    },food_name:{
        type: String,
        required: true
    },price:{
        type: Number,
        required: true
    },add_ons:{
        type: String,
    }, rating:{
        type: Number,
        required: true
    }, tags:{
        type: String
    }
})

module.exports = Food = mongoose.model("Food", food_schema)