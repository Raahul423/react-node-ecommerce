const testcode = async (req, res) => {
  try {
    const verifyCode = Math.floor(100000 + Math.random() * 900000);
    return res.status(200).json(verifyCode)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { testcode };
