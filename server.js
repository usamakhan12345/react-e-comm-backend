import express from 'express'
import cors from "cors"
import router from "./Routes/index.js"
import connectDb from './db/index.js'

const app = express()
// const router = express.Router()
const PORT = 3000

app.use(express.json())
app.use(cors())
connectDb()
app.get('/',(req,res)=>{
    res.send("Hello world")
})
// app.use('/',(req,res,next)=>{
//     console.log("middle ware is working")
//     next()
// })
app.use('/api',router)



app.listen(PORT,()=>{
    console.log("server is running on"+PORT)
})