import User from "../Models/user.model";
import { uploadOncloudinary } from "../Utils/cloudinary";

const registerUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res
        .status(400)
        .json({ success: false, message: "Provide required field" });
    }

    const userExist = User.findOne({ email: email });
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

    return res.status(200).json({success:true,message:"User Registered Sucessfully"})


  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
