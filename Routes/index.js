import express from "express"
import user from "./User.js"
import order from "./Order.js"


const router = express.Router()

router.use("/user",user)
router.use("/order",order)

export default router