
const { bucket } = require('../../../middleware/filebase'); 
const productModel = require('../../../model/collections/porduct')
module.exports =async(req,res)=>{
try {
    const file = req.file;
    const{productType,color,price,companyID}= req.body


    // Check if file is present
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload the file to Firebase Cloud Storage
    const fileName = `${Date.now()}-${file.originalname}`;
    const fileUpload = bucket.file(fileName);
    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    stream.on('error', (error) => {
      console.error('Error uploading to Cloud Storage:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });

    stream.on('finish', async() => {
    
        
        const url = await fileUpload.getSignedUrl({
            action: 'read',
            expires: '03-01-2500', // Set an appropriate expiration date
          });
            
          const newproductModel= await productModel.insertMany({productType,color,price,companyID,imageURL: url[0]})
      res.json({ success: true,newproductModel});
    });

    stream.end(file.buffer);
  } catch (error) {
    console.error('Error handling upload request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }}