import cookieParser from 'cookie-parser';
import express from 'express';
import { ownerRouter } from './routes/ownerRouter.js';
import { productRouter } from './routes/productRouter.js';
import { userRouter } from './routes/userRouter.js';
import { db } from './config/mongooseConnection.js';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.static('public'));
app.set("view engine","ejs")

app.use("/owner",ownerRouter)
app.use("/user",userRouter)
app.use("/product",productRouter)

app.get("/",(req,res)=>{
    res.send("I am here")
})

app.listen(port,()=>{
    console.log(`Server is running at :: http://localhost:${port}`)
})