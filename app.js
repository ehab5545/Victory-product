
const express = require('express')
const app = express()

require('dotenv').config()
const path = require('path');
var gi = require(`gitignore`);
const cors = require("cors");
app.use(cors());
const connecttion=require('./model/connecttionDB')


const PORT = process.env.PORT
app.use(express.json());
const {
    userRouter,
    companyRouter,
    productRouter
}=require('./router/app')

app.use(userRouter,companyRouter,productRouter)


connecttion()
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log(`is run at port ${PORT}`);
})