const router = require('express').Router();



const companyController =require('./controller/addcompany');
const getAllCompanyController =require('./controller/getAllcompany');
router.post("/addCompany",companyController)

router.get("/allcompany",getAllCompanyController)


   
module.exports=router