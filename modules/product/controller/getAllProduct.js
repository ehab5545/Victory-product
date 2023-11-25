const productModel = require('../../../model/collections/porduct')

module.exports =async(req,res)=>{
     
    let data = await productModel.find()
    res.status(200).json({message:'success',data})
    
}




