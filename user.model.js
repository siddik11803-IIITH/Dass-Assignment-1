const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password:{
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    user_type:{
      type: String,
      required: true  
    }
});

module.exports = User = mongoose.model("User", user_schema);