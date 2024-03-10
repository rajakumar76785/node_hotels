const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type: Number,
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:[{
        type:String,
    }],
    num_sales:{
        type:Number,
        default:0,
    }
});

module.exports = mongoose.model('MenuItem',menuItemSchema);