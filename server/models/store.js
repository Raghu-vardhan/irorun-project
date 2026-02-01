import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
  storeName: String,
  username: String,
  password: String,
  discountCode: String,
  isActive: Boolean
});

export default mongoose.models.Store ||
  mongoose.model("store", StoreSchema);
