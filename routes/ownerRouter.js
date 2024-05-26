import express from 'express'
import { Router } from 'express'
const ownerRouter = express.Router();

ownerRouter.get("/",(req,res)=>{
    res.send("hela folks from owner ")
});

export {ownerRouter}