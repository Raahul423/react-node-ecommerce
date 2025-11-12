import User from "../Models/user.model";

const registerUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res
        .status(400)
        .json({ success: false, message: "Provide required field" });
    }

    const user = User.findOne({ email: email });
    if (user) {
      res.status(409).json({ success: false, message: "User already exist" });
    }

    



  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
