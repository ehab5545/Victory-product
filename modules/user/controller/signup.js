const userModel = require('../../../model/collections/user')
const bcrypt = require('bcrypt');


var jwt = require('jsonwebtoken');
module.exports =async(req,res,next)=>{

 try{   
    
    const{firstName,lastName,email,password,phone,role}= req.body
 const user =await userModel.findOne({email})
 
     
    bcrypt.hash(password, 8, async function(err, hash) {
        if (err) {
            res.json({message:"hash err"})
        } else {
            const token = jwt.sign({ email}, 'shhhhh');
            const newUser= await userModel.insertMany({firstName,lastName,email,password:hash, phone,role})
      
         res.status(200).json({message:"success",newUser});
        }
    });
    
 }
 catch(err){
    res.status(400).json({message:"unexpected error occured"});
 }
  
}  