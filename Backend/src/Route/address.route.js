import { Router } from "express";
import { verifyJwt } from "../Middleware/auth.middleware.js";
import { addressController, deleteAddress, getAddress, updateAddress } from "../Controllers/address.controller.js";

const addressroute = Router();

addressroute.route("/address").post(verifyJwt,addressController);
addressroute.route("/user-address").get(verifyJwt,getAddress);
addressroute.route("/update-address/:id").put(verifyJwt,updateAddress);
addressroute.route("/:id").delete(verifyJwt,deleteAddress);

export {addressroute}