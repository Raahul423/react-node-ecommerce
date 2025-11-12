import { Router } from "express";
import { registerUser } from "../Controllers/user.controller.js";
import { multerUpload } from "../Middleware/multer.middleware.js";

const router = Router();

router.route('/register').post(multerUpload.fields([
    {
        name:'avatar',
        maxCount:1
    }
]),registerUser)


export {router}