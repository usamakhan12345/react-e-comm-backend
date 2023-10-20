import jwt from "jsonwebtoken";

const VerifyTokenWithDecode =async(req,res,next)=>{
    // const token =req.headers.authorization && req.headers.authorization.split(" ")[1]
    // const {token} = req.headers
    const token = req.headers.authorization.split(" ")[1]
    try {
        // const decoded = await jwt.verify(token, 'USAMA');
        //     console.log(decoded)
        //     res.status(200).send({"status" : 200 , "message": decoded})

         // verify a token symmetric
         jwt.verify(token, 'USAMA', function(err, decoded) {
    console.log(decoded) // bar
    if(err){
        console.log(err)
    }
            res.status(200).send({"status" : 200 , "message": decoded})

  });

        next()
      } catch(err) {
        return res.status(404).send({message: "unauthorized",err :  err.message}) 
      }

 
}

export default VerifyTokenWithDecode ;