import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { addressController } from "../Controllers/address.controller.js";

const addressroute = Router();

addressroute.route("/address").post(verifyJwt,addressController);

export {addressroute}