import mongoose from "mongoose";
import Address from "../Models/address.model.js";
import User from "../Models/user.model.js";

// add address
const addressController = async (req, res) => {
  try {
    const user = req.user?._id;
    const { address_line, name, city, state, pincode, locality, mobile } =
      req.body;

    if (
      !address_line ||
      !name ||
      !city ||
      !state ||
      !pincode ||
      !locality ||
      !mobile
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required..." });
    }

    const address = await Address.create({
      address_line,
      name,
      city,
      state,
      pincode,
      locality,
      mobile,
      userId: user,
    });

    await User.findByIdAndUpdate(
      user,
      { $push: { address: address._id } },
      { new: true }
    );

    return res
      .status(201)
      .json({ success: true, message: "Address successfully added", address });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// update Address
const updateAddress = async (req, res) => {
  try {
    const userId = req.user?._id;
    const { id } = req.params;
    const { address_line, name, city, state, pincode, locality, mobile } =
      req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid address id..." });
    }

    const addressexist = await Address.findById(id);
    if (!addressexist) {
      return res
        .status(403)
        .json({ success: false, message: "Address not found.." });
    }

    if (addressexist.userId.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this address",
      });
    }

    const updatedAddress = await Address.findByIdAndUpdate(
      id,
      {
        address_line,
        name,
        city,
        state,
        pincode,
        locality,
        mobile,
      },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: "Address updated successfully",
      address: updatedAddress,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//delete address
const deleteAddress = async (req, res) => {
  try {
    const userId = req.user?._id;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid address id..." });
    }

    const addressexist = await Address.findById(id);
    if (!addressexist) {
      return res
        .status(403)
        .json({ success: false, message: "Address not found.." });
    }

    if (addressexist.userId.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this address",
      });
    }

    await Address.findByIdAndDelete(id);

    await User.findByIdAndUpdate(
      userId,
      { $pull: { address: id } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Address deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { addressController, updateAddress, deleteAddress };
