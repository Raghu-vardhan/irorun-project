const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
      required: true
    },
    orderAmount: { type: Number, required: true },
    discountAmount: { type: Number, default: 0 },
    discountCode: { type: String },
    currency: { type: String, default: "INR" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
