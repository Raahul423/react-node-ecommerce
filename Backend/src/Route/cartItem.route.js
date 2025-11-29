import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { cartItemcontroller, getallProductsinCart, updateItem } from "../Controllers/cartItem.controller.js";

const cartItem = Router();

cartItem.route('/add-items').post(verifyJwt,cartItemcontroller)
cartItem.route('/allproducts').get(verifyJwt,getallProductsinCart)
cartItem.route('/updateitem').put(verifyJwt,updateItem)

export {cartItem}