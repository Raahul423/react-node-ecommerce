import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { allProducts, createProduct } from "../Controllers/product.controller.js";


const product = Router();
// Public Route
product.route('/allproducts').get(allProducts)



// Admin Route
product.route('/create').post(verifyJwt,multerUpload.array('images'),createProduct);


export {product}