const Order = require("../models/Order");

// GET store orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ storeId: req.storeId })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// GET store summary
exports.getSummary = async (req, res) => {
  try {
    const orders = await Order.find({ storeId: req.storeId });

    const totalOrders = orders.length;
    const totalRevenue = orders.reduce(
      (sum, o) => sum + Number(o.orderAmount),
      0
    );

    res.json({
      totalOrders,
      totalRevenue
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching summary" });
  }
};
