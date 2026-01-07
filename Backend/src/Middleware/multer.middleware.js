import multer, { diskStorage } from "multer";

// in production we cant use localstorage its code for localstorage its best for learning puspose code 

// import path from 'path'

// const uploadDir = path.resolve("uploads")

// const localStorage = diskStorage({
//     destination:function(req,file,cb){
//         cb(null, uploadDir)
//     },
//     filename:function(req,file,cb){
//         cb(null, `${Date.now()}_${file.originalname}`);
//     }
// })




// this code for production in this code multer file upload in memorystorage not locastorage 



const multerUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit (optional)
  },
});

export {multerUpload}