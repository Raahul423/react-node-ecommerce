import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  oldprice: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});
