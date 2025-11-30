import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { addItemWishlist, getwishListProduct } from "../Controllers/wishlist.controller.js";
const wishlistrouter = Router()

wishlistrouter.route('/add-items').post(verifyJwt,addItemWishlist)
wishlistrouter.route('/wishlist-products').get(verifyJwt,getwishListProduct)




export {wishlistrouter}