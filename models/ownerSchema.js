import mongoose from "mongoose";

const ownerSchema = mongoose.Schema({
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

export { ownerSchema };
