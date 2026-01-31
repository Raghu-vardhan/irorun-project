const Store = require("../models/store");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const store = await Store.findOne({ username, isActive: true });
    if (!store) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, store.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

   const jwt = require("jsonwebtoken");

    const token = jwt.sign(
    {
        storeId: store._id,   // 👈 IMPORTANT
        username: store.username
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
    );

    res.json({
    token,
    storeName: store.storeName
    });


    res.json({
      token,
      storeName: store.storeName
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
