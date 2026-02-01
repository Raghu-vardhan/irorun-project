import connectDB from "../../lib/db";
import Store from "../../lib/models/Store";
import Order from "../../lib/models/Order";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  await connectDB();

  const order = req.body;

  const discountCode =
    order.discount_codes?.length
      ? order.discount_codes[0].code
      : null;

  if (!discountCode) {
    return res.status(200).json({ message: "No discount code" });
  }

  const store = await Store.findOne({ discountCode });
  if (!store) {
    return res.status(200).json({ message: "No matching store" });
  }

  await Order.create({
    orderId: order.id,
    storeId: store._id,
    orderAmount: order.total_price,
    discountAmount: order.total_discounts,
    discountCode,
    customerName: order.customer
      ? `${order.customer.first_name} ${order.customer.last_name}`
      : "Guest",
    customerAddress: order.shipping_address
      ? order.shipping_address.city
      : "N/A"
  });

  return res.status(200).json({ message: "Order saved" });
}
