import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadOncloudinary = async function (localfile) {
  try {
    if(!localfile) return null;
    const cloudinaryUpload = await cloudinary.uploader.upload(localfile, {
      resource_type: "auto",
    });
    fs.unlinkSync(localfile);
    return cloudinaryUpload
  } catch (error) {
    fs.unlinkSync(localfile)
    return null;
  }
};

export {uploadOncloudinary}
