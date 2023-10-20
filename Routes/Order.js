import express from "express"
import Order from "../models/Order.js"
import joi from "joi";
import main from "../Nodemailer/nodemailer.js"


const router = express.Router()


const joiOrderSchema = joi.object({
    name : joi.string().required(),
    email : joi.string().email().required(),
    phone : joi.string().required(),
    amount : joi.number().required(),
    carts : joi.array().required(),
    address : joi.string().required()
    // carts : joi.array()

})

router.post('/',async(req,res)=>{
    // console.log(req.body)
    const{name,email,phone , address,amount} = req.body
    try{

        await joiOrderSchema.validateAsync(req.body);
        const order= await new Order({...req.body})
        await order.save()
        res.status(200).send({"status" : "200","message": "order placed Successfuly" })
        console.log("work")
        let details = {
            from :"shehzadausamakhan@gmail.com",
            to: email,
            subject: "Your order has been placed!", // Subject line
            // text: ` Dear ! ${name}
            //         Congratulatons you are successfuly 
            //         registered at SMIT STORE,
            //         Thanks !
            //         Regards : SMIT STORE
            // `, // plain text body
            html: `<h2 style="color : #906090">SMIT STORE</h2>
                    <h3 style="color : green">Thanks you For Your Order!</h3>
                    <h2>Hi ${name}</h2>
                      <br/>
                      <p>Your order # 153810313651374 has been placed successfully and we will let you know once your package is on its way. Check the status of your order using the tracking link below and enable push notifications on your SMIT STORE App to receive real-time updates of your order.</p>
                      <button style="justify-content:center ; backgroundColor : 'red' ; color : 'white' ">Cancel Order </button>
                        <div style="box-shadow : 2px 2px 5px black"><h3>Delivery Details:</h3>
                                <br/>
                         Name : ${name}  <br/>
                         Address : ${address}  <br/>
                         phone : ${phone}  <br/>
                         Total Amount : ${amount} <br/>
                         <h5>Dear ! ${name}  <br/>
                        Please ready Rs: ${amount}/- on the time of Delivery
                         </h5>   
                        </div>
            `, // html body
        
        }
        main(details ,email,name)
    }
    catch(error){
        res.status(404).send({"message": error})
    }

})


export default router ;