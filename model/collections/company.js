const mongoose = require('mongoose');
const comapnySchema = new mongoose.Schema({
    companyName:{type:String},
    location:{type:String},
    counrty:{type:String},
    hotline:{type:Number},
    
},{
timestamps:true
})

module.exports=mongoose.model("company",comapnySchema )