import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { allProducts, createProduct, deleteProduct, filterProducts, getallisFeaturedProduct, totalProduct, updateProduct } from "../Controllers/product.controller.js";


const product = Router();
// Public Route

// product.route('/get-productby-catid/:id').get(getProductbycatId)
// product.route('/get-productby-subcatid/:id').get(getProductbysubcatId)

product.route('/allproducts').get(allProducts)
product.route('/filter-products').get(filterProducts)
product.route('/total-product').get(totalProduct)
product.route('/featured-product').get(getallisFeaturedProduct)




// Admin Route
product.route('/create').post(verifyJwt,multerUpload.array('images'),createProduct);
product.route('/delete-product/:id').delete(verifyJwt,deleteProduct)
product.route('/update-product/:id').put(verifyJwt,multerUpload.array('images'),updateProduct)


export {product}