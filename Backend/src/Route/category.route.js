import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { countCategory, createCategory, getcategories, subCategoriescount } from "../Controllers/category.controller.js";

const category = Router();




category.route('/create-categories').post(verifyJwt,multerUpload.single('images'),createCategory)
category.route('/').get(verifyJwt,getcategories)
category.route('/count/categories').get(verifyJwt,countCategory)
category.route('/count/categories').get(verifyJwt,countCategory)
category.route('/count/subcategories').get(verifyJwt,subCategoriescount)


export {category}




