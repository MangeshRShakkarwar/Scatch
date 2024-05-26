import { Router } from 'express';
import { ownerSchema } from "../models/ownerSchema.js";
const ownerRouter = Router();

ownerRouter.post("/create",async ()=>{

    const ownerCount = await ownerSchema.find()
    if(ownerCount > 0){
        res.status(501).send("You can't be the owner as owner exists!!")
    }

    let {fullname , email , password} = req.body;

    let createOwner  = await ownerSchema.create({
        fullname ,email, password,
    });

    res.status(201).send(createOwner);
})
ownerRouter.get("/",(req,res)=>{
    res.send("hela folks from owner ")
});

export { ownerRouter };
