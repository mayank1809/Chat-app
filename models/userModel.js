
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{ 
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    active:{
        type:String,
        default:'0'
    }
},
{
    timestamps:true
}
);
 
module.exports = mongoose.model('User',userSchema);