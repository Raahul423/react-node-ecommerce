import { Router } from "express";
import { accessandrefreshToken, changePassword, forgetPasswordOtp, loginUser, logoutUser, registerUser, updateAccountDetails, uploadAvatar, verifyEmail, verifyforgetPasswordotp } from "../Controllers/user.controller.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { testcode } from "../Controllers/test.js";
import { verifyJwt } from "../Middleware/auth.middleware.js";


const router = Router();

router.route('/register').post(registerUser)
router.route('/verify-email').get(verifyEmail)
router.route('/login').post(loginUser)
router.route('/logout').get(verifyJwt,logoutUser)
router.route('/update-account').patch(verifyJwt,updateAccountDetails)
router.route('/change-password').patch(verifyJwt,changePassword)
router.route('/upload-avatar').post(verifyJwt,multerUpload.single("avatar"),uploadAvatar)
router.route('/generatetoken').post(accessandrefreshToken)
router.route('/forget-password').post(forgetPasswordOtp)
router.route('/verifyforgetpasswordotp').post(verifyforgetPasswordotp)
router.route('/test').get(testcode) // only testing purpose code here


export {router}