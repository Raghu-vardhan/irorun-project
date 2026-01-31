const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  storeName: String,
  username: String,
  password: String,
  discountCode: String,
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports =
  mongoose.models.Store || mongoose.model("Store", StoreSchema);
