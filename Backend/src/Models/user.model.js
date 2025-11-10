import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  mobile: {
    type: Number,
    default: null,
  },
  refreshToken: {
    type: String,
    default: "",
  },
  verify_email: {
    type: Boolean,
    default: false,
  },
  last_login_date: {
    type: Date,
    default: "",
  },
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  shoppingCart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cartproduct",
    },
  ],
  orderHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  forgot_password_otp: {
    type: String,
    default: null,
  },
  forgot_password_expiry: {
    type: Date,
    default: "",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
},
{
    timestamps:true
});

const User = mongoose.model("User",userSchema);
export default User
