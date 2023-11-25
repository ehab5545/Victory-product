const productModel = require('../../../model/collections/company')

module.exports =async(req,res)=>{
     
    console.log('hetre');
    let data = await productModel.find()
    res.status(200).json({message:'success',data})
    


}


