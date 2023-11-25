const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productType:{type:String},
    color:{type:String},
    price:{type:String},
    about:{type:String},
    imageURL:{type:Array},
    companyID:{type:mongoose.Types.ObjectId,ref:"company"}
    
},{
timestamps:true
})

module.exports=mongoose.model("product",productSchema )