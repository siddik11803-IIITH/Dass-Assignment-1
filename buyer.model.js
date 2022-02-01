const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const buyer_schema = new Schema({
    email:{
        type: String,
        required: true
    },
    batch:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})

module.exports = Buyer = mongoose.model("Buyer", buyer_schema);