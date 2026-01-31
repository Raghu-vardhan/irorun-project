function OrderTable({ orders }) {
  if (!orders.length) {
    return <p style={{ marginTop: "20px" }}>No orders found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Address</th>
          <th>Amount</th>
          <th>Discount</th>
          <th>Saved</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((o) => (
          <tr key={o._id}>
            <td>{o.orderId}</td>
            <td>{o.customerName || "—"}</td>
            <td>{o.customerAddress || "—"}</td>
            <td>₹{o.orderAmount}</td>
            <td>{o.discountCode}</td>
            <td>₹{o.discountAmount}</td>
            <td>{new Date(o.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
