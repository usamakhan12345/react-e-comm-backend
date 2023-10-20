import jwt from "jsonwebtoken";

const VerifyToken =async(req,res,next)=>{
    const token =req.headers.authorization && req.headers.authorization.split(" ")[1]

            jwt.verify(token, 'USAMA', function(err, decheadoded) {
        // console.log(decoded) // bar
        if(err){
            return res.status(404).send({message: "unauthorized",err :  err.message})
        }

        next()
      });

    // try {
    //     var decoded = jwt.verify(token, 'USAMA');
        
    //     next()
    //   } catch(err) {
    //     return res.status(404).send({message: "unauthorized",err :  err.message}) 
    //   }

 
}


const VerifyTokenWithDecode =async(req,res,next)=>{
    const token =req.headers.authorization && req.headers.authorization.split(" ")[1]

   try {
        var decoded = jwt.verify(token, 'USAMA');
        
        next()
      } catch(err) {
        return res.status(404).send({message: "unauthorized",err :  err.message}) 
      }

 
}

export default VerifyToken ;