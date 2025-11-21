import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { countCategory, createCategory, getCategoryByID, getcategories, countsubcategoryofCategory } from "../Controllers/category.controller.js";

const category = Router();

//Public Route 
category.route('/').get(getcategories)// show all categories with children
category.route('/count').get(countCategory) // count Root category 
category.route('/children/count/:id').get(countsubcategoryofCategory) // specific root category ka children count 
category.route('/:id').get(getCategoryByID) // get one category by ID





//Admin Protected route
category.route('/').post(verifyJwt,multerUpload.array('images'),createCategory)




export {category}




