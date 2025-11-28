import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderId:{
        type:String,
        required:true,
        unique:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    prduct_Details:{
        type:String,
        Image:Array
    },
    paymentId:{
        type:String,
        default:""
    },
    delivery_address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    totalAmount:{
        type:String,
        default:0
    }
},{timestamps:true});

const Order = mongoose.model("Order",orderSchema);
export{Order}