import mongoose, { Mongoose } from "mongoose";
import Users from "./User.js"
const { Schema } = mongoose;
const orderSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        // unique : true,
    },
    phone : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    carts : {
        type : Array ,  
        required : true
    },
    address : {
        type : String,
        required : true
    },
    customer:{
        type : Schema.Types.ObjectId,
        ref : 'Users',
        required : true 
    }
   
})

const  order = mongoose.model('Orders',orderSchema)
export default order ;