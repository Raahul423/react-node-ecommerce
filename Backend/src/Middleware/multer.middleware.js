import multer, { diskStorage } from "multer";
import path from 'path'



const uploadDir = path.resolve("uploads")

const localStorage = diskStorage({
    destination:function(req,file,cb){
        cb(null, uploadDir)
    },
    filename:function(req,file,cb){
        cb(null, `${Date.now()}_${file.originalname}`);
    }
})

const multerUpload = multer ({storage:localStorage}) 
export {multerUpload}