import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderId: String,
  storeId: mongoose.Schema.Types.ObjectId,
  orderAmount: Number,
  discountAmount: Number,
  discountCode: String,
  customerName: String,
  customerAddress: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);
