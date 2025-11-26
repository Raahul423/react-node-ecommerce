import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { allProducts, createProduct, getProductbycatId, getProductbycatName, getProductbysubcatId } from "../Controllers/product.controller.js";


const product = Router();
// Public Route
product.route('/allproducts').get(allProducts)
product.route('/get-productby-catid/:id').get(getProductbycatId)
product.route('/get-productby-subcatid/:id').get(getProductbysubcatId)
product.route('/by-category-name').get(getProductbycatName)



// Admin Route
product.route('/create').post(verifyJwt,multerUpload.array('images'),createProduct);


export {product}