import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    images: [
      {
        url: { type: String },
        publicId: { type: String },
        required: true,
      },
    ],
    brand: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    oldprice: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    subcategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    countInstock: {
      type: Number,
      default: 0,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    isfeatured: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Number,
      required: true,
    },
    productRam: [
      {
        type: String,
        default: null,
      },
    ],
    size: [
      {
        type: String,
        default: null,
      },
    ],
    productWeight: [
      {
        type: String,
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export { Product };
