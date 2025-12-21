import mongoose from "mongoose";
import { Product } from "../Models/product.model.js";
import {
  removeFromcloudinary,
  uploadOncloudinary,
} from "../Utils/cloudinary.js";
import fs from "fs";
import { raw } from "express";
import Category from "../Models/category.model.js";
import { log } from "console";
import { url } from "inspector";

// create products //admin work
const createProduct = async (req, res) => {
  const localfiles = req.files || [];
  const allImages = [];
  try {
    if (req.body.subcategory === "") {
      req.body.subcategory = null;
    }
    
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
    const limit = parseInt(req.query.limit || 1);
    const totalProducts = await Product.countDocuments();
    const totalpages = Math.ceil(totalProducts / limit);

    if (page > totalpages) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    const product = await Product.find()
      .populate("category", "name _id")
      .populate("subcategory", "name _id")
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    if (product.length === 0) {
      return res.status(200).json({
        success: true,
        product: [],
        page,
        totalpages,
        totalProducts,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
      page,
      totalpages,
      totalProducts,
      message: "Successfully Get All Products",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// get products by category ID
// const getProductbycatId = async (req, res) => {
//   try {
//     const catId = req.params.id;
//     if (!catId || !mongoose.Types.ObjectId.isValid(catId)) {
//       throw new Error("wrong category Id");
//     }

//     const filter = { category: catId }; // yha se category model ke ander jab tumne create krte time id pass ki thi usi id ki help se tum all products get kar paa rahe ho

//     const page = parseInt(req.query.page || 1);
//     const perPageItem = parseInt(req.query.perpageitem || 2);
//     const totalProducts = await Product.countDocuments(filter);
//     const totalpages =
//       totalProducts === 0 ? 0 : Math.ceil(totalProducts / perPageItem);

//     if (page > totalpages) {
//       throw new Error("Page not found....");
//     }

//     const product = await Product.find(filter)
//       .populate("category", "name _id")
//       .skip((page - 1) * perPageItem)
//       .limit(perPageItem)
//       .exec();
//     if (product.length === 0) {
//       throw new Error("Products not found...");
//     }

//     return res.status(200).json({
//       success: true,
//       product,
//       page,
//       totalpages,
//       message: "Successfully Get All Products",
//     });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: error.message });
//   }
// };   // for learning Purpose

// get product by Category Name

// get products by subcategory ID
// const getProductbysubcatId = async (req, res) => {
//   try {
//     const catId = req.params.id;
//     if (!catId || !mongoose.Types.ObjectId.isValid(catId)) {
//       throw new Error("wrong category Id");
//     }

//     const filter = { subcategory: catId }; // yha se category model ke ander jab tumne create krte time id pass ki thi usi id ki help se tum all products get kar paa rahe ho

//     const page = parseInt(req.query.page || 1);
//     const perPageItem = parseInt(req.query.perpageitem || 2);
//     const totalProducts = await Product.countDocuments(filter);
//     const totalpages =
//       totalProducts.length === 0 ? 1 : Math.ceil(totalProducts / perPageItem);

//     if (page > totalpages) {
//       throw new Error("Page not found....");
//     }

//     const product = await Product.find(filter)
//       .populate("subcategory", "name _id")
//       .skip((page - 1) * perPageItem)
//       .limit(perPageItem)
//       .exec();
//     if (product.length === 0) {
//       throw new Error("Products not found...");
//     }

//     return res.status(200).json({
//       success: true,
//       product,
//       page,
//       totalpages,
//       message: "Successfully Get All Products",
//     });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: error.message });
//   }
// }; // for learning Purpose

//get products by subcategory Name

// filter products by price
const filterProducts = async (req, res) => {
  try {
    const filter = {};

    const { catId, subcatId, minprice, maxprice, rating } = req.query;

    if (catId) {
      filter.category = catId;
    }

    if (subcatId) {
      filter.subcategory = subcatId;
    }

    const price = {};

    if (minprice) price.$gte = Number(minprice);
    if (maxprice) price.$lte = Number(maxprice);
    if (Object.keys(price).length) {
      filter.price = price;
    }

    if (rating != undefined) {
      const ratingval = Number(rating);
      filter.rating = { $gte: ratingval };
    }

    const page = parseInt(req.query.page || 1);
    const perPageItem = parseInt(req.query.perPageItem || 5);
    const totalProducts = await Product.countDocuments(filter);
    const totalPages =
      totalProducts === 0 ? 1 : Math.ceil(totalProducts / perPageItem);

    if (page > totalPages) {
      throw new Error("Page Not Found ....");
    }

    const filterProduct = await Product.find(filter)
      .populate("category", "name _id")
      .populate("subcategory", "name _id")
      .skip((page - 1) * perPageItem)
      .limit(perPageItem)
      .lean();

    return res.status(200).json({
      success: true,
      filterProduct,
      page,
      perPageItem,
      totalProducts,
      totalPages,
      message: "all filter product fetched sucessfully",
    });
  } catch (error) {
    return res.status(500).jaon({ success: true, message: error.message });
  }
};

// get total product lists
const totalProduct = async (req, res) => {
  try {
    const productCount = await Product.countDocuments();

    if (!productCount) {
      throw new Error("Not any product fetched");
    }

    return res.status(200).json({
      success: true,
      productCount,
      message: "All product count fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// get all featured Products
const getallisFeaturedProduct = async (req, res) => {
  try {
    const isFeatureProduct = await Product.find({ isfeatured: true })
      .populate("category", "name _id")
      .populate("subcategory", "name _id");
    if (!isFeatureProduct) {
      throw new Error("Product not found");
    }

    return res.status(200).json({
      success: true,
      isFeatureProduct,
      message: "All Products Fetched Successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// delete Product
const deleteProduct = async (req, res) => {
  try {
    const removeProduct = await Product.findById(req.params.id);
    if (!removeProduct) {
      throw new Error("Product not found...");
    }

    const publicIds = removeProduct.images.map((img) => img.publicId);
    if (!publicIds) {
      throw new Error("Images not Found ...");
    }

    for (const img of publicIds) {
      await removeFromcloudinary(img);
    }

    await Product.deleteOne({ _id: removeProduct });

    return res
      .status(200)
      .json({ success: true, message: "Product Successfully removed" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// update product
const updateProduct = async (req, res) => {
  const localfiles = req.files || [];
  const imageObj = [];
  try {
    const {
      name,
      desc,
      price,
      oldprice,
      countInstock,
      rating,
      isfeatured,
      discount,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      throw new Error("Product not foundd...");
    }

    if (name) product.name = name;
    if (desc) product.desc = desc;
    if (price) product.price = price;
    if (oldprice) product.oldprice = oldprice;
    if (countInstock) product.countInstock = countInstock;
    if (rating) product.rating = rating;
    if (discount) product.discount = discount;
    if (isfeatured !== undefined) product.isfeatured = isfeatured;

    if (localfiles.length > 0) {
      for (const img of product.images) {
        await removeFromcloudinary(img.publicId);
      }

      for (const img of localfiles) {
        const upload = await uploadOncloudinary(img.path);

        if (!upload.secure_url || !upload.public_id) {
          throw new Error("Image Upload on Cloudinary failed");
        }

        imageObj.push({
          url: upload.secure_url || upload.url,
          publicId: upload.public_id,
        });
      }

      product.images = imageObj;
    }

    const updatedProduct = await product.save({ validateBeforeSave: false });

    return res.status(200).json({
      success: true,
      product: updatedProduct,
      message:
        localfiles.length > 0
          ? "Product & Images updated successfully"
          : "Product updated successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// get single Product by Id
const singleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      throw new Error("Product not Found...");
    }
    return res.status(200).json({
      success: true,
      product,
      message: "Product fetched Successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export {
  createProduct,
  allProducts,
  filterProducts,
  totalProduct,
  getallisFeaturedProduct,
  deleteProduct,
  updateProduct,
  singleProduct,
};
