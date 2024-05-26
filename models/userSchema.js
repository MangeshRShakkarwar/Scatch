import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[],
    },
    order:{
        type:Array,
        default:[],

    },
    isAdmin:Boolean,
    contact:Number,
    picture:String,

})

export {userSchema};