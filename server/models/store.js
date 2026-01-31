const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  discountCode: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Store", StoreSchema);
