const createProduct = async (req, res) => {
  try {
    const {
      name,
      desc,
      brand,
      price,
      oldprice,
      countInstock,
      rating,
      isfeatured,
      discount,
      productRam,
      size,
      productWeight
    } = req.body;
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
