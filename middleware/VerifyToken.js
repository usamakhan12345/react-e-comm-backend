import jwt from "jsonwebtoken";

const VerifyToken =async(req,res,next)=>{
    const token =req.headers.authorization && req.headers.authorization.split(" ")[1]

    jwt.verify(token, 'USAMA', function(err, decheadoded) {
        // console.log(decoded.foifo) // bar
        if(err){
            return res.status(404).send({message: "unauthorized",err :  err.message})
        }

        next()
      });
 
}

export default VerifyToken ;