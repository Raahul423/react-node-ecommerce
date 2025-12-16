import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { addressController, updateAddress } from "../Controllers/address.controller.js";

const addressroute = Router();

addressroute.route("/address").post(verifyJwt,addressController);
addressroute.route("/update-address/:id").put(verifyJwt,updateAddress);

export {addressroute}