import mongoose from "mongoose";
import Address from "../Models/address.model.js";
import User from "../Models/user.model.js";

// add address 
const addressController = async(req,res)=>{
    try {
        const userId = req.user?._id
        const {address_line,name,city,state,pincode,locality,mobile} = req.body

        if(!address_line || !name || !city || !state || !pincode || !locality || !mobile){
            return res.status(400).json({success:false,message:"All fields are required..."})
        }

        const address = await Address.create({
            address_line,
            name,
            city,
            state,
            pincode,
            locality,
            mobile,
            userId:userId
        });

        await User.findByIdAndUpdate(
            userId,
            {$push:{address:address._id}},
            {new:true}
        );

        return res.status(201).json({success:true,message:"Address successfully added",address})
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
}

export {addressController}