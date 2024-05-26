import mongoose from "mongoose";

const owerSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    products:{
        type:Array,
        default:[],

    },
    isAdmin:Boolean,
    gstin:String,
    picture:String,

})

export {owerSchema};