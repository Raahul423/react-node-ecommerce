import mongoose from "mongoose";
import Category from "../Models/category.model.js";
import fs from "fs/promises";
import {
  removeFromcloudinary,
  uploadOncloudinary,
} from "../Utils/cloudinary.js";
import slugify from "slugify";

const safeUnlink = async (path) => {
  if (!path) return;
  try {
    await fs.unlink(path);
  } catch (error) {
    console.log(error);
  }
};

// create Category
const createCategory = async (req, res) => {
  let imageObj = null;
  let localfile = req.file?.path;
  console.log("imagepath", localfile);

  try {
    const { name, parentId } = req.body;

    if (!name || !name.trim()) {
      await safeUnlink(localfile);
      return res
        .status(500)
        .json({ success: false, message: "Name is required" });
    }

    const Exist = await Category.findOne({ name: name.trim() });
    if (Exist) {
      await safeUnlink(localfile);
      return res
        .status(500)
        .json({ success: false, message: "Category is Already Exist" });
    }

    if (parentId) {
      if (!mongoose.Types.ObjectId.isValid(parentId)) {
        await safeUnlink(localfile);
        return res
          .status(500)
          .json({ success: false, message: "Invalid ProductId" });
      }

      const product = await Category.findById(parentId);
      if (!product) {
        await safeUnlink(localfile);
        return res
          .status(500)
          .json({ success: false, message: "Parent Category not found" });
      }
    }

    // upload image in cloudinary
    if (localfile) {
      const uploadImage = await uploadOncloudinary(localfile);
      if (!uploadImage) {
        return res
          .status(500)
          .json({ success: false, message: "File Upload Failed" });
      }

      imageObj = {
        url: uploadImage.secure_url || uploadImage.url,
        public_id: uploadImage.public_id,
      };
    }

    const slug = slugify(name.trim(), { lower: true, strict: true });

    const category = await Category.create({
      name: name.trim(),
      slug,
      images: imageObj || null, // store as array
      parentId: parentId || null,
    });

    return res.status(201).json({
      success: true,
      category,
      message: "Category created successfully",
    });
  } catch (error) {
    if (imageObj?.public_id) {
      await removeFromcloudinary(imageObj.public_id);
    }
    return res
      .status(500)
      .json({ success: false, message: error.message || "Server error" });
  }
};

// getcategories
const getcategories = async (req, res) => {
  try {
    const categories = await Category.find();
    const categoryMap = {};

    categories.forEach((cat) => {
      categoryMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootcategories = [];

    categories.forEach((cat) => {
      if (cat.parentId) {
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      } else {
        rootcategories.push(categoryMap[cat._id]);
      }
    });

    return res.status(201).json({success:true,rootcategories})
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { createCategory,getcategories };
