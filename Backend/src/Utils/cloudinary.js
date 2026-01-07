import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

 const uploadOncloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: "products",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });
};

// This code for localStorage or local file not work in production best for learning
// const uploadOncloudinary = async function (localfile) {
//   try {
//     if (!localfile) return null;
//     const cloudinaryUpload = await cloudinary.uploader.upload(localfile, {
//       resource_type: "auto",
//     });
//     fs.unlinkSync(localfile);
//     return cloudinaryUpload;
//   } catch (error) {
//     fs.unlinkSync(localfile);
//     return null;
//   }
// };

const removeFromcloudinary = async (publicId) => {
  try {
    const deleteImage = await cloudinary.uploader.destroy(publicId);
    return deleteImage;
  } catch (error) {
    console.error("Delete Error:", error);
    return null;
  }
};

export { uploadOncloudinary,removeFromcloudinary };
