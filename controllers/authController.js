const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const adminModel = require("../models/adminModel");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await adminModel.findByUsername(username);
    if (!admin)
      return res.status(400).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json({ token: generateToken(admin.id) });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};