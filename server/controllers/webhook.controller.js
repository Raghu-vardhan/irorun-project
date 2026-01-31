const Store = require("../models/store");
const Order = require("../models/Order");

exports.orderCreated = async (req, res) => {
  try {
    const order = req.body;

    // 1. Check discount code
    const discountCode =
      order.discount_codes && order.discount_codes.length
        ? order.discount_codes[0].code
        : null;

    if (!discountCode) {
      return res.status(200).json({ message: "No discount code, ignored" });
    }

    // 2. Find store by discount code
    const store = await Store.findOne({ discountCode });

    if (!store) {
      return res.status(200).json({ message: "No matching store, ignored" });
    }

    // 3. Save order
    await Order.create({
      orderId: order.id,
      storeId: store._id,
      orderAmount: order.total_price,
      discountAmount: order.total_discounts,
      discountCode,
      currency: order.currency
    });

    res.status(200).json({ message: "Order saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Webhook error" });
  }
};
