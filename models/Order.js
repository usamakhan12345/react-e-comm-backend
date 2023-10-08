import mongoose from "mongoose";
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
    }
})

const  order = mongoose.model('Orders',orderSchema)
export default order ;