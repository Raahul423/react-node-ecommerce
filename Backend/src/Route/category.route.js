import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { multerUpload } from "../Middleware/multer.middleware.js";
import { createCategory } from "../Controllers/category.controller.js";

const category = Router();




category.route('/create-categories').post(verifyJwt,multerUpload.single('images'),createCategory)

export {category}




