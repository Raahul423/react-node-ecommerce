import { Router } from "express";
import { registerUser, verifyEmail } from "../Controllers/user.controller.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { testcode } from "../Controllers/test.js";


const router = Router();

router.route('/register').post(multerUpload.fields([
    {
        name:'avatar',
        maxCount:1
    }
]),registerUser)
router.route('/verify-email').get(verifyEmail)

router.route('/test').get(testcode) // only testing purpose code here


export {router}