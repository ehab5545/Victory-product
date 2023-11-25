const getAllModel = require('../../../model/collections/user')

module.exports =async(req,res)=>{
     
    let data = await getAllModel.find()
    res.status(200).json({message:'success',data})
    
}
