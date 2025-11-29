import mongoose from "mongoose";
import { CartProduct } from "../Models/cartproduct.model.js";
import User from "../Models/user.model.js";

//adding item in cart
const cartItemcontroller = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) {
      throw new Error("Invalid User");
    }
    const { productId } = req.body;

    if (!productId) {
      throw new Error("Provide ProductId");
    }

    const ExistProduct = await CartProduct.findOne({
      userId: userId,
      productItems: productId,
    });

    if (ExistProduct) {
      throw new Error("Product already in cart....");
    }

    const createCartItem = await CartProduct.create({
      userId,
      productItems: productId,
      quantity: 1,
    });

    await User.updateOne(
      { _id: userId },
      { $push: { shoppingCart: productId } }
    );

    return res.status(200).json({
      success: true,
      createCartItem,
      message: "Item saved in Cart Successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// get all Product Items inside the Cart
const getallProductsinCart = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      throw new Error("unauthorize user");
    }

    const cartItems = await CartProduct.find({ userId }).populate(
      "productItems"
    );

    return res
      .status(200)
      .json({ success: true, cartItems, message: "All products are fetched" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// update cart Items Quantity
const updateItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { qty, Itemid } = req.body;

    if (!qty || !Itemid || Itemid == undefined) {
      throw new Error("product and quantity not received...");
    }

    const updateProduct = await CartProduct.updateOne(
      { userId, _id: Itemid },
      { $set: { quantity: qty } }
    );

    return res
      .status(200)
      .json({ success: true, updateProduct, message: "Updated Successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// delete cart item
const deleteItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { itemId } = req.body;

    const removeItemfromCart = await CartProduct.deleteOne({
      userId,
      _id: itemId,
    });

    return res.status(200).json({success:true,message:"Deleted successfully"})
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { cartItemcontroller, getallProductsinCart, updateItem, deleteItem };
