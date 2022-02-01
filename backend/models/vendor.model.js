const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const vendor_schema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    shop_name:{
        type: String,
        required: true
    },
    open_close_time:{
        type: String,
        required: true
    }
})

module.exports = Vendor = mongoose.model("Vendor", vendor_schema);
