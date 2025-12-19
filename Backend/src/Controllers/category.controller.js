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

const allsubCategories = async (categoryId) => {
  try {
    const result = [];
    const stack = [categoryId];

    while (stack.length > 0) {
      const currentId = stack.pop();

      const children = await Category.find({ parentId: currentId });
      // console.log(children);

      for (const child of children) {
        result.push(child);
        stack.push(child._id);
      }
    }

    return result;
  } catch (error) {
    throw new Error(error);
  }
};



// create Category // Admin Work
const createCategory = async (req, res) => {
  let localfile = req.files || [];
  let imageObj = [];

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
      await safeUnlink(localfile.path);
      return res
        .status(500)
        .json({ success: false, message: "Category is Already Exist" });
    }

    if (parentId) {
      if (!mongoose.Types.ObjectId.isValid(parentId)) {
        await safeUnlink(localfile.path);
        return res
          .status(500)
          .json({ success: false, message: "Invalid ProductId" });
      }

      const parentCategory = await Category.findById(parentId);
      if (!parentCategory) {
        await safeUnlink(localfile.path);
        return res
          .status(500)
          .json({ success: false, message: "Parent Category not found" });
      }
    }

    // Upload Image on Cloudinary

    if (localfile.length > 0) {
      for (const file of localfile) {
        if (!file?.path) {
          return res
          .status(500)
          .json({ success: false, message:  `Expected file.path for diskStorage ${file.originalname}` });
        }

        const uploadImage = await uploadOncloudinary(file.path);
        if (!uploadImage.secure_url || !uploadImage.public_id) {
          return res
          .status(500)
          .json({ success: false, message:"File not found.."});
        }

        imageObj.push({
          url: uploadImage.secure_url || uploadImage.url,
          public_id: uploadImage.public_id,
        });
      }
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

// getcategories show all categories with children // Public
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

    return res.status(201).json({ success: true, rootcategories });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//CountCategory // Public
const countCategory = async (req, res) => {
  try {
    const rootCategory = await Category.countDocuments({ parentId: null });
    if (!rootCategory) {
      return res.status(200).json({
        success: false,
        count: rootCategory,
        message:
          rootCategory === 0
            ? "No root categories found"
            : "Root categories found",
      });
    }
    res.status(200).json({ success: true, rootCategory });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//countSubCategories from a specific Category // Public
const countsubcategoryofCategory = async (req, res) => {
  try {
    const rootCategory = req.params.id;
    const subCategory = await Category.countDocuments({
      parentId: rootCategory,
    });
    if (!subCategory) {
      return res
        .status(500)
        .json({ success: false, message: "subCategories not found" });
    }

    return res.status(200).json({ success: true, message: subCategory });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// get category by ID // public
const getCategoryByID = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res
        .status(500)
        .json({ success: false, message: "catergory not found by given ID" });
    }

    return res.status(200).json({
      success: true,
      category,
      message: "category found successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Image //admin work
const removeImageCloudinary = async (req, res) => {
  try {
    const { categoryId, imageId } = req.params;

    const category = await Category.findById(categoryId);
    if (!category) {
      throw new Error("Category not found...");
    }

    const Image = category?.images.id(imageId);
    if (!Image) {
      throw new Error("Image not Foundd .....");
    }

    await removeFromcloudinary(Image.public_id);

    await Image.deleteOne();
    await category.save({ validateBeforeSave: false });

    return res
      .status(200)
      .json({ success: true, category, message: "Image remove Successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Category with subcategory and all images from cloudinary // admin work
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (!category) {
      throw new Error("category not found ...");
    }

    const subcategories = await allsubCategories(category._id);

    const allCategories = [category, ...subcategories];

    // now select all images from allcategories
    const imagepublicId = allCategories
      .flatMap((cat) => cat.images) // sari images array recevied
      .map((img) => img.public_id) // from all images recevied publicId
      .filter(Boolean); // remove null/undefined images

    // now remove all images from cloudinary
    await Promise.all(
      imagepublicId.map((img) => {
        removeFromcloudinary(img);
      })
    );

    const allCategoryIds = allCategories.map((catId) => catId._id);
    await Category.deleteMany({ _id: { $in: allCategoryIds } });

    return res.status(200).json({
      success: true,
      deletedCategoriesCount: allCategoryIds.length,
      deletedImagesCount: imagepublicId.length,
      message: "Category with SubCategories Deleted....",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//Update Category details // admin work
const updateCategory = async (req, res) => {
  const localfiles = req.files;
  const imageObj = [];
  try {
    const { name, parentId } = req.body;

    if (localfiles.length > 0) {
      for (const files of localfiles) {
        if (!files.path) {
          throw new Error("Image path nor found...");
        }

        const upload = await uploadOncloudinary(files.path);
        if (!upload.secure_url || !upload.public_id) {
          throw new Error("Image upload Failed....");
        }

        imageObj.push({
          url: upload.secure_url || upload.url,
          public_id: upload.public_id,
        });
      }
    }

    const slug = slugify(name.trim(), { lower: true, strict: true });

    const updateData = {
      name,
      slug,
      parentId
    };

    if (imageObj.length > 0) {
      updateData.images = imageObj;
    }

    const updateCategory = await Category.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updateCategory) {
      throw new Error("Category not updated");
    }

    return res.status(200).json({
      success: true,
      updateCategory,
      message: "category updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// get root category All Category
const allRootCategory = async(req,res) => {
  try {
    const allcategory = await Category.find();
    const rootcategory = allcategory.filter((cat)=>cat.parentId == null);

    if(rootcategory.length === 0){
      return res.status(404).json({success:false,message:"Not Found any Category...."});
    }


    return res.status(200).json({success:true,message:"Category founded...",rootcategory})
  } catch (error) {
    res.status(500).json({success:false,message:error.message})
  }
}

export {
  createCategory,
  getcategories,
  countCategory,
  countsubcategoryofCategory,
  getCategoryByID,
  removeImageCloudinary,
  deleteCategory,
  updateCategory,
  allRootCategory
};
