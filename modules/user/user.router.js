const router = require('express').Router();


const singupController =require('./controller/signup');
const singinController =require('./controller/sigIn');

router.post("/singin",singinController)
router.post("/singup",singupController)
const getAlluserController =require('./controller/getAlluser');
router.get("/getAlluser",getAlluserController)

   
module.exports=router
