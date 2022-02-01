const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const wallet_schema = new Schema({
    user_email:{
        type: String,
        required: true,
        unique: true
    },amount:{
        type: Number,
        required: true
    }
});

module.exports = Wallet = mongoose.model("Wallet", wallet_schema);