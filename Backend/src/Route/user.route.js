import { Router } from "express";
import { accessandrefreshToken, changePassword, forgetPasswordOtp, getUser, loginUser, logoutUser, registeradmin, registerUser, resetPassword, updateAccountDetails, uploadAvatar, verifyEmail, verifyforgetPasswordotp } from "../Controllers/user.controller.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { verifyJwt } from "../Middleware/auth.middleware.js";


const router = Router();

router.route('/register').post(registerUser)
router.route('/admin/register').post(registeradmin)
router.route('/verify-email').get(verifyEmail)  
router.route('/login').post(loginUser)
router.route('/logout').get(verifyJwt,logoutUser)
router.route('/update-account').patch(verifyJwt,updateAccountDetails)
router.route('/change-password').patch(verifyJwt,changePassword)
router.route('/upload-avatar').post(verifyJwt,multerUpload.single("avatar"),uploadAvatar)
router.route('/generatetoken').post(accessandrefreshToken)
router.route('/forget-password').post(forgetPasswordOtp)
router.route('/verifyforgetpasswordotp').post(verifyforgetPasswordotp)
router.route('/resetpassword').post(resetPassword)
router.route('/userinfo').get(verifyJwt,getUser)


export {router}