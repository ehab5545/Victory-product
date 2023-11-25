const router = require('express').Router();


const multer = require('multer');
// Import the Firebase connection file
const addProductController =require('./controller/addproduct');

// Set up Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/addproduct', upload.single('image'),addProductController)

const getAllProductController =require('./controller/getAllProduct');



router.get("/getAllProduct",getAllProductController)

   
module.exports=router