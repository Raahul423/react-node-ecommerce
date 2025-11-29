import mongoose from "mongoose";
import { CartProduct } from "../Models/cartproduct.model.js";
import User from "../Models/user.model.js";

const cartItemcontroller = async (req, res) => {
  try {
    const userId = req.user;
    if (!userId) {
      throw new Error("Invalid User");
    }
    const { productId } = req.body;

    if (!productId) {
      throw new Error("Provide ProductId");
    }

    const ExistProduct = await CartProduct.findOne({
      userId: userId,
      product_id: productId,
    });

    if (ExistProduct) {
      throw new Error("Product already in cart....");
    }

    const createCartItem = await CartProduct.create({
      userId,
      product_id:productId,
      quantity: 1,
    });

    await User.updateOne(
      { _id: userId },
      { $push: { shoppingCart: productId } }
    );

    return res.status(200).json({success:true,createCartItem,message:"Item saved in Cart Successfully"})
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


const getallProductsinCart = async (req,res) => {
  try {
    const userId = req.user

    if(!userId){
      throw new Error("unauthorize user");
    }

    const cartItems = await CartProduct.find({userId}).populate("product_id");
    
    return res.status(200).json({success:true,cartItems,message:"All products are fetched"})
  } catch (error) {
    return res.status(500).json({success:false,message:error.message})
  }
}


export {cartItemcontroller, getallProductsinCart}
