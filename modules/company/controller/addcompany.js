const companyModel = require('../../../model/collections/company')

module.exports =async(req,res,next)=>{

 try{   
    
    const{companyName,location,counrty,hotline}= req.body

 
     
  
           
            const newCompany= await companyModel.insertMany({companyName,location,counrty,hotline})
      
         res.status(200).json({message:"success",newCompany});
        
    }
    
 
 catch(err){
    res.status(400).json({message:"unexpected error occured"});
 }
  
}