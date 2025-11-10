import dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";

if(!process.env.MONGO_URI){
    throw new Error("Mongo db .env file error")
}

const connectDB = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Sucessfully Connected to database");
        
        
    } catch (error) {
        throw new Error("Connection Failed",error.message)
    }
}

export default connectDB;