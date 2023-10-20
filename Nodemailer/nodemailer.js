import nodemailer from "nodemailer"



const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'shehzadausamakhan@gmail.com',
    pass: 'uhmk vyfv brrp kahv'
  }
});


async function main(details,email,name) {

mailTransporter.sendMail(details,(err,info)=>{
    try{

      if(err){
        
        console.log(err)
      }else{
        console.log("email sent")
        console.log("Message sent: %s", info.messageId);
      }
    }catch(err){
      console.log(err)
    }
    });


}


export default main
