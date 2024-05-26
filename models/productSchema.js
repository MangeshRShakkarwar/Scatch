import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    discount:{
        type:Number,
        default:0,
    },
    bgColor:String,
    panelColor:String,
    textColor:String,
    price:Number,
    image:String,

})

export {productSchema};