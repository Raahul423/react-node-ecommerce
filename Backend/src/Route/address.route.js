import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { addressController, deleteAddress, updateAddress } from "../Controllers/address.controller.js";

const addressroute = Router();

addressroute.route("/address").post(verifyJwt,addressController);
addressroute.route("/update-address/:id").put(verifyJwt,updateAddress);
addressroute.route("/:id").delete(verifyJwt,deleteAddress);

export {addressroute}