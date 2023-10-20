import mongoose from "mongoose";


 const connectDb = async()=>{
    try{
       await mongoose.connect('mongodb+srv://usamakhan:usama123@cluster0.zau8mk3.mongodb.net/SMITSTORE?retryWrites=true&w=majority',{
        useNewUrlParser : true
       })
       console.log("database connected successfuly")

    }catch(err){
        console.log(err)
    }
}
export default connectDb