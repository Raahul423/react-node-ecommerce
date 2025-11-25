import { Product } from "../Models/product.model.js";
import {
  removeFromcloudinary,
  uploadOncloudinary,
} from "../Utils/cloudinary.js";
import fs from "fs";

// create products //admin work
const createProduct = async (req, res) => {
  const localfiles = req.files || [];
  const allImages = [];
  try {
    const {
      name,
      desc,
      brand,
      price,
      oldprice,
      category,
      subcategory,
      countInstock,
      rating,
      isfeatured,
      discount,
      productRam,
      size,
      productWeight,
    } = req.body;

    if (!name || !desc) {
      throw new Error("These fields should be required");
    }

    const exist = await Product.findOne({ name });
    if (exist) {
      throw new Error("product already Exist");
    }

    if (localfiles.length === 0) {
      throw new Error("Images should be required");
    }

    for (let file of localfiles) {
      if (!file.path) {
        throw new Error("Image cant't found ...");
      }

      const upload = await uploadOncloudinary(file.path);
      if (!upload.secure_url || !upload.public_id) {
        throw new Error("Upload image on cloudinary failed...");
      }

      allImages.push({
        url: upload.secure_url || upload.url,
        publicId: upload.public_id,
      });
    }

    const product = await Product.create({
      name,
      desc,
      brand,
      price,
      oldprice,
      images: allImages,
      category,
      subcategory,
      countInstock,
      rating,
      isfeatured,
      discount,
      productRam,
      size,
      productWeight,
    });

    const populatedProduct = await Product.findById(product._id)
      .populate("category", "_id name")
      .populate("subcategory", "_id name");

    return res.status(201).json({
      success: true,
      product: populatedProduct,
      message: "product created successfully",
    });
  } catch (error) {
    for (let img of allImages) {
      if (img?.publicId) {
        await removeFromcloudinary(img.publicId);
      }
    }
    return res.status(500).json({ success: false, message: error.message });
  }
};

// get All Products // Public
const allProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1);
    const perPageItem = parseInt(req.query.perpageitem || 2);
    const totalProducts = await Product.countDocuments();
    const totalpages = Math.ceil(totalProducts / perPageItem);

    if (page > totalpages) {
      throw new Error("Page not found....");
    }

    const product = await Product.find()
      .populate("category","name _id")
      .skip((page - 1) * perPageItem)
      .limit(perPageItem)
      .exec();
    if (!product) {
      throw new Error("Products not found...");
    }

    return res.status(200).json({
      success: true,
      product,
      page,
      totalpages,
      message: "Successfully Get All Products",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


// get products by category ID
const getProductbycatId = async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1);
    const perPageItem = parseInt(req.query.perpageitem || 2);
    const totalProducts = await Product.countDocuments();
    const totalpages = Math.ceil(totalProducts / perPageItem);

    if (page > totalpages) {
      throw new Error("Page not found....");
    }
    

    const product = await Product.find({category:req.params.id})
      .populate("category","name _id")
      .skip((page - 1) * perPageItem)
      .limit(perPageItem)
      .exec();
    if (!product) {
      throw new Error("Products not found...");
    }

    return res.status(200).json({
      success: true,
      product,
      page,
      totalpages,
      message: "Successfully Get All Products",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { createProduct, allProducts, getProductbycatId };
