import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { cartItemcontroller } from "../Controllers/cartItem.controller.js";

const cartItem = Router();

cartItem.route('/add-items').post(verifyJwt,cartItemcontroller)

export {cartItem}