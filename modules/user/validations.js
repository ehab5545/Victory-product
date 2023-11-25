const Joi = require('joi');


Joi.objectId = require('joi-objectid')(Joi)
module.exports={
    
    addVehicle:{
        singup:{
            //{firstName,lastName,email,password,phone,role}
            body:Joi.object().required().keys({
                firstName:Joi.string().required(),
                lastName:Joi.string().required(),
            email:Joi.string().email().required(),
            password:Joi.string().required(),
            cpassword:Joi.ref('password'), 
            phone:Joi.number().required(),
            role:Joi.string()
            
    
            })
         
          
            
            
            
          
            
        
    }
 
}

}