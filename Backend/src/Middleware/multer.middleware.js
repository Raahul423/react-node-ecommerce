import multer, { diskStorage } from "multer";

const localStorage = diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public')
    },
    filename:function(req,file,cb){
        cb(null, file.originalname);
    }
})

const multerUpload = multer ({storage:localStorage}) 
export {multerUpload}