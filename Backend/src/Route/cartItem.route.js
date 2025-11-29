import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { cartItemcontroller, getallProductsinCart } from "../Controllers/cartItem.controller.js";

const cartItem = Router();

cartItem.route('/add-items').post(verifyJwt,cartItemcontroller)
cartItem.route('/allproducts').get(verifyJwt,getallProductsinCart)

export {cartItem}