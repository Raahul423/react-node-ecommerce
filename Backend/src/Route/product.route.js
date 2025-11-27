import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { allProducts, createProduct, filterbyPrice, getProductbycatId, getProductbycatName, getProductbysubcatId, getProductbysubCatName } from "../Controllers/product.controller.js";


const product = Router();
// Public Route
product.route('/allproducts').get(allProducts)

product.route('/get-productby-catid/:id').get(getProductbycatId)
product.route('/by-category-name').get(getProductbycatName)

product.route('/get-productby-subcatid/:id').get(getProductbysubcatId)
product.route('/by-subcategory-name').get(getProductbysubCatName)

product.route('/filter-by-price').get(filterbyPrice)




// Admin Route
product.route('/create').post(verifyJwt,multerUpload.array('images'),createProduct);


export {product}