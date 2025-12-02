import User from "../Models/user.model.js";
import {
  removeFromcloudinary,
  uploadOncloudinary,
} from "../Utils/cloudinary.js";
import { sendresetPasswordemail } from "../Utils/emailotpService.js";
import { sendVerificationEmail } from "../Utils/emailservice.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

function generateVerificationToken() {
  const token = crypto.randomBytes(32).toString("hex");
  const hashed = crypto.createHash("sha256").update(token).digest("hex");
  return { token, hashed };
}

const generateAccessandRefreshToken = async (userId) => {
  const user = await User.findById(userId);
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};


// register User && and after that send verify email link to User email
const registerUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      return res
        .status(400)
        .json({ success: false, message: "Provide required field" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      res.status(409).json({ success: false, message: "User already exist" });
    }

    const user = await User.create({
      email,
      fullName,
      password,
    });

    const { hashed, token } = generateVerificationToken();
    user.emailVerificationToken = hashed;
    user.emailVerificationExpires = Date.now() + 1000 * 60 * 5; // valid 10 min only

    await user.save({ validateBeforeSave: false });

    await sendVerificationEmail({
      to: user.email,
      token,
      name: user.fullName,
      userId: user?._id,
    });

    return res.status(200).json({
      success: true,
      message: "Please Verify your Email...",
      user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



// verify email
const verifyEmail = async (req, res) => {
  try {
    const { token, id } = req.query;
    if (!token || !id) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email link" });
    }

    const compare = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      _id: id,
      emailVerificationToken: compare,
      emailVerificationExpires: { $gt: Date.now() },
    });

    if (!user) {
      await User.findByIdAndDelete(id);
      return res.status(400).json({ message: "Invalid or Expired Token..." });
    }

    user.verify_email = true;
    user.emailVerificationToken = null;
    user.emailVerificationExpires = null;

    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Email verified You can now login" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



// verify login
const loginUser = async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(500)
        .json({ message: "Please Provide Email or Password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "User not registered" });
    }

    if (user.verify_email === false) {
      return res.status(500).json({ message: "E-mail not Verified" });
    }

    const checkPassword = await user.isPasswordCorrect(password);

    if (!checkPassword) {
      return res.status(500).json({ message: "Your Password is incorrect" });
    }


    const { accessToken, refreshToken } = await generateAccessandRefreshToken(
      user._id
    );

    user.last_login_date = Date.now();
    

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        success: true,
        user,
        data: {
          accessToken,
          refreshToken,
        },
        message: "User Logged In Sucessfully",
      });
  } catch (error) {
    return res.status(500).status({ success: false, message: error.message });
  }
};



// logOutUser
const logoutUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user?._id, {
      $set: {
        refreshToken: null,
      },
    });

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({ message: "User Successfully LogOut" });
  } catch (error) {
    return res.status(500).status({ success: false, message: error.message });
  }
};



// Update Account Details
const updateAccountDetails = async (req, res) => {
  try {
    const { fullName, mobile } = req.body;

    if (!fullName && !mobile) {
      return res
        .status(400)
        .json({ sucess: false, message: "Please Upadte Atleast one field" });
    }

    const user = await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: { fullName, mobile },
      },
      {
        new: true,
      }
    );

    if (!user) {
      return res
        .status(400)
        .json({ sucess: false, message: "Invalid User Token" });
    }

    user.save({ validateBeforeSave: false });

    return res
      .status(200)
      .json({ success: true, user, message: "User Update Sucessfully" });
  } catch (error) {
    return res.status(500).status({ success: false, message: error.message });
  }
};



// change Password
const changePassword = async (req, res) => {
  try {
    const { oldpassword, newpassword } = req.body;

    const user = await User.findById(req.user?._id);

    if (!user) {
      return res
        .status(500)
        .status({ success: false, message: "User Token Invalid" });
    }

    const checkOldPassword = await user.isPasswordCorrect(oldpassword);

    if (!checkOldPassword) {
      return res.status(400).status({
        success: false,
        message: "Please Enter Your Old Password Correctly",
      });
    }

    if (oldpassword === newpassword) {
      return res.status(500).status({
        success: false,
        message: "New Password Can't be Same as Oldpassword",
      });
    }

    user.password = newpassword;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
      sucess: true,
      user,
      message: "Password is Successfully Updated",
    });
  } catch (error) {
    return res.status(500).status({ success: false, message: error.message });
  }
};



// upload avatar image
const uploadAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.user?._id);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Token not Found" });
    }

    if (user.avatar && user.avatar !== "") {
      const findImage = user.avatar?.split("/");
      const publicId = findImage[findImage.length - 1].split(".")[0];
      const removeImage = await removeFromcloudinary(publicId);

      if (!removeImage) {
        return res.status(400).json({
          success: false,
          message: "Image remove From Cloudinary Failed",
        });
      }
    }

    const localavatar = req.file?.path;
    if (!localavatar) {
      return res
        .status(409)
        .json({ sucess: false, message: "Upload Image Failed" });
    }

    const avatar = await uploadOncloudinary(localavatar);
    if (!avatar) {
      return res
        .status(409)
        .json({ sucess: false, message: "Image Can't Upload Cloudinary" });
    }

    user.avatar = avatar.secure_url;
    await user.save({ validateBeforeSave: false });

    return res
      .status(200)
      .json({ success: true, user, message: "Avatar Upload Successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



// after accessToken expire then generate new accesstoken with the help of refreshToken
const accessandrefreshToken = async (req, res) => {
  try {
    const incomingToken = req.cookies?.refreshToken;

    if (!incomingToken) {
      return res.status(401).json({ message: "Unauthorize User" });
    }

    const verifyToken = jwt.verify(
      incomingToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(verifyToken?._id);

    if (!user) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    if (incomingToken !== user.refreshToken) {
      return res
        .status(409)
        .json({ message: "refreshToken Mismatch or  Expired " });
    }

    const { accessToken, refreshToken } = await generateAccessandRefreshToken(
      user?._id
    );

    if (!accessToken || !refreshToken) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to generate tokens" });
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        success: true,
        message: "refreshToken and accessToken are again generated",
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




//send reset password OTP..
const forgetPasswordOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(500)
        .json({ success: false, message: "please Provide Mail First" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Wrong e-mail please provide correct e-mail..",
        });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000);
    user.otp = verifyCode;
    user.otpExpire = Date.now() + 1000 * 60 * 5; // 5 min
    await user.save({ validateBeforeSave: false });

    await sendresetPasswordemail({
      to: email,
      otp: verifyCode,
      name: user.fullName,
    });

    return res
      .status(200)
      .json({ success: true, user, message: "Code Send Successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




// verify forgot password Otp...
const verifyforgetPasswordotp = async (req, res) => {
  try {
    const { email, code } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Please Provide Valid Email.." });
    }

    if (user.otp !== code || user.otpExpire < Date.now()) {
      return res
        .status(500)
        .json({ message: "Your Otp is Wrong or Expired Please try again" });
    }

    await User.findByIdAndUpdate(user?._id, {
      $set: { otp: null, otpExpire: null },
    });

    return res
      .status(200)
      .json({
        success: true,
        message: "Otp verified Sucessfully you can forget your password",
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



// reset password
const resetPassword = async (req, res) => {
  try {
    const {email,newpassword} = req.body;

    const user = await User.findOne({email})

    if(!user){
      return res.status(500).json({message:"Invalid User"});
    }

    user.password = newpassword
    await user.save({validateBeforeSave:false});

    res.status(200).json({success:true,message:"Password reset Successfully"});


  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



//get User
const getUser = async(req,res)=>{
  try {
    const user = await User.findById(req.user?._id).select('-password -refreshToken')

    return res.status(200).json({success:true,user,message:"User Fetched Succesfully"});
  } catch (error) {
    return res.status(500).status({success:false,message:error.message})
  }
}

export {
  registerUser,
  verifyEmail,
  loginUser,
  logoutUser,
  updateAccountDetails,
  changePassword,
  uploadAvatar,
  accessandrefreshToken,
  forgetPasswordOtp,
  verifyforgetPasswordotp,
  resetPassword,
  getUser
};
