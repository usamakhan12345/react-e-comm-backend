import express from "express"
import Order from "../models/Order.js"
import joi from "joi";


const router = express.Router()


const joiOrderSchema = joi.object({
    name : joi.string().required(),
    email : joi.string().email().required(),
    phone : joi.string().required(),
    amount : joi.number().required(),
    carts : joi.array().required()
    // carts : joi.array()

})

router.post('/',async(req,res)=>{
    console.log(req.body)
    try{

        await joiOrderSchema.validateAsync(req.body);
        const order= await new Order({...req.body})
        await order.save()
        res.status(200).send({"status" : "200","message": "order placed Successfuly" })
        console.log("work")
    }
    catch(error){
        res.status(404).send({"message": error})
    }

})


export default router ;