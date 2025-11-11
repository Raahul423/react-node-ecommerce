import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:number,
        default:1
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
},{
    timestamps:true
})

export default CartProduct = mongoose.model("CartProduct",cartProductSchema);
 