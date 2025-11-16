import { Router } from "express";
import { loginUser, logoutUser, registerUser, updateAccountDetails, verifyEmail } from "../Controllers/user.controller.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { testcode } from "../Controllers/test.js";
import { verifyJwt } from "../Middleware/auth.middleware.js";


const router = Router();

router.route('/register').post(multerUpload.fields([
    {
        name:'avatar',
        maxCount:1
    }
]),registerUser)
router.route('/verify-email').get(verifyEmail)
router.route('/login').post(loginUser)
router.route('/logout').get(verifyJwt,logoutUser)
router.route('/update-account').patch(verifyJwt,updateAccountDetails)
router.route('/test').get(testcode) // only testing purpose code here


export {router}