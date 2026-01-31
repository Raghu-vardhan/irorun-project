const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true },
    storeId: { type: mongoose.Schema.Types.ObjectId, required: true },

    orderAmount: { type: Number, required: true },

    discountCode: String,
    discountAmount: Number,

    customerName: String,
    customerAddress: String
  },
  {
    timestamps: true // 👈 auto adds createdAt & updatedAt
  }
);

module.exports =
  mongoose.models.Order || mongoose.model("Order", OrderSchema);
