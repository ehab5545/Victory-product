

var admin = require("firebase-admin");

var serviceAccount = require("../car-rental-77369-firebase-adminsdk-49gwx-339566e9de.json");




admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://car-rental-77369-default-rtdb.firebaseio.com",
  storageBucket:"gs://car-rental-77369.appspot.com"
});



// Set up Multer for handling file uploads
const storage = admin.storage();
const bucket = storage.bucket();



module.exports = { bucket };;