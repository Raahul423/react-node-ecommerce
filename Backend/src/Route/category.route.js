import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { countCategory, createCategory, getCategoryByID, getcategories, countsubcategoryofCategory, removeImageCloudinary, deleteCategory, updateCategory } from "../Controllers/category.controller.js";
import { test } from "../Controllers/test.js";

const category = Router();
//testing route
// category.route('/:testing').post(test);




//Public Route 
category.route('/').get(getcategories)// show all categories with children
category.route('/count').get(countCategory) // count Root category 
category.route('/children/count/:id').get(countsubcategoryofCategory) // specific root category ka children count 
category.route('/:id').get(getCategoryByID) // get one category by ID





//Admin Protected route
category.route('/create').post(verifyJwt,multerUpload.array('images'),createCategory);// create Category
category.route('/:categoryId/image/:imageId').delete(verifyJwt,removeImageCloudinary)// delete any image
category.route('/:categoryId').delete(verifyJwt,deleteCategory)// delete Category with all subcategories
category.route('/:id/update').put(verifyJwt,multerUpload.array('images'),updateCategory)// update category

export {category}




