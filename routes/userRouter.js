
import { Router } from 'express';
const userRouter = Router()

userRouter.get("/",(req,res)=>{
    res.send("hela folks from user ")
});

export { userRouter };
