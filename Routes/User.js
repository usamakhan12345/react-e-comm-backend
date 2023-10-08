import express from "express"
import joi from "joi";
import bcrypt from "bcrypt"
import User from "../models/User.js";
import jwt from  "jsonwebtoken"
import VerifyToken from "../middleware/VerifyToken.js";
// import cors from "cors"


const router = express.Router()

const joiSchema = joi.object({
    name : joi.string().required(),
    email : joi.string().email().required(),
    password : joi.string().required(),
    phone : joi.string().required()
})
// router.use(cors())




router.post('/', async(req,res)=>{
    try{

        await joiSchema.validateAsync(req.body);
        const password =await bcrypt.hash(req.body.password, 10 )
        const user = await new  User({...req.body,password})
        await user.save();
        const token =await jwt.sign({_id: user.id, email : user.email},"USAMA")
        
        console.log(password)
        res.send({"message" : "User registered successfuly",token 
        : token})
    }
    catch(error){
        res.status(404).send({"message" : error})
    }
})

router.post("/login",async(req,res)=>{
    try{

        const {email,password} = req.body
        
        const user =await User.findOne({email})
        if(!user){
            res.status(404).send({message:"user not registered"})
        }
        // console.log(user.password)

            const userPassword = await  bcrypt.compare(password, user.password)
        
       if(userPassword){
         const token =await jwt.sign({_id: user.id, email : user.email},"USAMA")
        res.status(200).send({message: "user login successfuly", status : "200Ok",  token : token})
        }
        else{
        res.status(404).send({message: "Wrong Password", status : "404ok" })

        }
    }catch(err){
        console.log(err)
    }
})

router.get("/users",VerifyToken,async(req,res) =>{
    try{

        const users = await User.find().select("-password")
        res.status(200).send({message: "succes",users})
    }catch(error){
        console.log(error)
    }
})

export default router