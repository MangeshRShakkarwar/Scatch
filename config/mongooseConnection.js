import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
mongoose
.connect(process.env.MONGODB_URI)
.then(function(){
    console.log("DB connected !")
})
.catch(function(err){
    console.log(err)
})
const db = mongoose.connection
export { db };

