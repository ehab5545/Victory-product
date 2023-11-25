const router = require('express').Router();


const singupController =require('./controller/signup');
const singinController =require('./controller/sigIn');

router.post("/singin",singinController)
router.post("/singup",singupController)

   
module.exports=router