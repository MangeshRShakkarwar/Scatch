import { Router } from 'express';
const productRouter = Router();

productRouter.get("/",(req,res)=>{
    res.send("hela folks from product page ")
});

export { productRouter };
