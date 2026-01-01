import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { addItemWishlist, getwishListProduct, removeItem, wishlistProducttotal } from "../Controllers/wishlist.controller.js";
const wishlistrouter = Router()

wishlistrouter.route('/add-items').post(verifyJwt,addItemWishlist)
wishlistrouter.route('/wishlist-products').get(verifyJwt,getwishListProduct)
wishlistrouter.route('/remove-products').delete(verifyJwt,removeItem)
wishlistrouter.route('/countwishlist').get(verifyJwt,wishlistProducttotal);



export {wishlistrouter}