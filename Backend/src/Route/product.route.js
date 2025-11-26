import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { allProducts, createProduct, getProductbycatId, getProductbycatName, getProductbysubcatId } from "../Controllers/product.controller.js";


const product = Router();
// Public Route
product.route('/allproducts').get(allProducts)
product.route('/getproductbyCatId/:id').get(getProductbycatId)
product.route('/getproductbysubCatId/:id').get(getProductbysubcatId)
product.route('/by-subcategory-name/:name').get(getProductbycatName)



// Admin Route
product.route('/create').post(verifyJwt,multerUpload.array('images'),createProduct);


export {product}