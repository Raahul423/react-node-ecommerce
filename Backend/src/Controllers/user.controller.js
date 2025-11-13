import User from "../Models/user.model.js";
import { uploadOncloudinary } from "../Utils/cloudinary.js";
import { sendVerificationEmail } from "../Utils/emailservice.js";
import crypto from 'crypto';

function generateVerificationToken() {
  const token = crypto.randomBytes(32).toString('hex'); 
  const hashed = crypto.createHash('sha256').update(token).digest('hex');
  return { token, hashed };
} 

const registerUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      return res
        .status(400)
        .json({ success: false, message: "Provide required field" });
    }

    const userExist =await User.findOne({ email: email });
    if (userExist) {
      res.status(409).json({ success: false, message: "User already exist" });
    }

    const localAvater = req.files?.avatar[0]?.path || "";
    
    const avatar = await uploadOncloudinary(localAvater);

    const user = await User.create({
        email,
        fullName,
        password,
        avatar:avatar?.url || ""
    })

    const {hashed,token} = generateVerificationToken();
    user.emailVerificationToken = hashed;
    user.emailVerificationExpires = Date.now() + 1000 * 60 * 60 * 24;

    await user.save();

    await sendVerificationEmail({to:user.email,token,name:user.fullName,userId:user._id})


    return res.status(200).json({success:true,message:"User Registered Sucessfully",user})


  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


export {registerUser}