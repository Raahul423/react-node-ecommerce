import jwt from 'jsonwebtoken'
import User from '../Models/user.model.js';

const verifyJwt = async (req,res,next) => {
    try {
        const token = req.cookies?.AccessToken || req.headers?.authorization?.split(" ")[1];
    
        if(!token){
            return res.status(401).json({message:"Unauthorize user"});
        }
    
        const verifyToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    
        if(!verifyToken){
             return res.status(401).json({message:"Invalid Token"});
        }
    
        const user = await User.findById(verifyToken?._id)
        req.user = user;
        next()
    } 
    catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
}

export {verifyJwt}