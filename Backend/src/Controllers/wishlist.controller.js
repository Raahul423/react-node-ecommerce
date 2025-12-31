import mongoose from "mongoose";
import { Wishlist } from "../Models/wishlist.model.js";

// AddItem in wishList
const addItemWishlist = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      throw new Error("Inavlid User");
    }

    const { productId } = req.body;
    if (!productId) {
      throw new Error("Product id is required....");
    }

    const existItem = await Wishlist.findOne({ userId, productId });
    if (existItem) {
      throw new Error("Item Already In your Wishlist..");
    }

    const newItem = await Wishlist.create({
      userId,
      productId,
    });

    return res.status(200).json({
      success: true,
      newItem,
      message: "Successfully Added in WishList",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//get all wishlist
const getwishListProduct = async (req, res) => {
  try {
    const userId = req.user?._id;
    const wishlistItems = await Wishlist.find({ userId }).populate("productId");
    if (!wishlistItems) {
      throw new Error("Item not found....");
    }

    return res.status(200).json({
      success: true,
      wishlistItems,
      message: "Successfully fetched all wishList Items",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// delete wishList
const removeItem = async (req, res) => {
  try {
    const userId = req.user?._id;
    const { productId } = req.body;
    if (!productId) {
      throw new Error("please provide productId");
    }

    const deleteItem = await Wishlist.findOneAndDelete({
      userId,
      productId,
    });

    if (!deleteItem) {
      throw new Error("Item not found....");
    }

    return res
      .status(200)
      .json({ success: true, message: "Item removed Successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { addItemWishlist, getwishListProduct, removeItem };
