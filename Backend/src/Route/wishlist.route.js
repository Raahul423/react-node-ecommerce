import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { addItemWishlist } from "../Controllers/wishlist.controller.js";

const wishlistrouter = Router()

wishlistrouter.route('/add-items').post(verifyJwt,addItemWishlist)




export {wishlistrouter}