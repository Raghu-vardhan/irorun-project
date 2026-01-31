require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Store = require("../models/store");

async function createStore() {
  await mongoose.connect(process.env.MONGO_URI);

  const hashedPassword = await bcrypt.hash("123456", 10);

  await Store.create({
    storeName: "Hyderabad Store",
    discountCode: "HYD15",
    username: "hyd_store",
    password: hashedPassword,
    isActive: true
  });

  console.log("Store created with hashed password");
  process.exit();
}

createStore();
