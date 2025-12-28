import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { cartItemcontroller, deleteItem, getallProductsinCart, productCount, updateItem } from "../Controllers/cartItem.controller.js";


const cartItem = Router();

cartItem.route('/add-items').post(verifyJwt,cartItemcontroller)
cartItem.route('/allproducts').get(verifyJwt,getallProductsinCart)
cartItem.route('/updateitem').put(verifyJwt,updateItem)
cartItem.route('/deleteitem').delete(verifyJwt,deleteItem)
cartItem.route('/countproduct').get(verifyJwt,productCount);

export {cartItem}