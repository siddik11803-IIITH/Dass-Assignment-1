const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const order_schema = new Schema({
    food_name:{
        type: String,
        required: true
    },vendor_email:{
        type: String,
        required: true
    },food_id:{
        type: String,
        required: true
    },state:{
        type: String,
        required: true
    },quantity:{
        type: Number,
        required: true
    },cost:{
        type: Number,
        required: true      
    },user_email:{
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = Order = mongoose.model("Order", order_schema);