import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address_line:{
        type:String,
        default:""
    },
    name:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    },
    pincode:{
        type:Number,
    },
    locality:{
        type:String
    },
    mobile:{
        type:Number,
        default:null
    },
    address_Type:{
        type:String,
        enum:["home","work"],
        default:"home"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Address = mongoose.model("Address",addressSchema);
export default Address