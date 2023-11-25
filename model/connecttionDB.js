const mongoose = require('mongoose');
require('dotenv').config()

const url = process.env.DB_ONLINE_URL
module.exports= async() =>{
    return await  mongoose.connect(url).then((result)=>{
        console.log("connecttionDB");
    }).catch((err)=>{
        console.log("fail to connect");
    });
}
