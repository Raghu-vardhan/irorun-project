import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getOrders, getSummary } from "../api/api";
import Navbar from "../components/Navbar";
import OrderTable from "../components/Ordertable";
import Filters from "../components/Filters";

function Dashboard() {
  const { token, storeName } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    getOrders(token).then((data) => {
      setOrders(data);
      setFilteredOrders(data);
    });
    getSummary(token).then(setSummary);
  }, []);

  // FILTER LOGIC
  const applyFilter = (type, value) => {
    let data = [...orders];

    if (type === "orderId") {
      data = data.filter((o) =>
        o.orderId.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (type === "from") {
      data = data.filter(
        (o) => new Date(o.createdAt) >= new Date(value)
      );
    }

    if (type === "to") {
      data = data.filter(
        (o) => new Date(o.createdAt) <= new Date(value)
      );
    }

    if (type === "reset") data = orders;

    setFilteredOrders(data);
  };

  return (
    <>
      <Navbar storeName={storeName} />

      <div className="dashboard">
        <div className="cards">
          <div className="card">
            <p>Total Orders</p>
            <h2>{summary.totalOrders}</h2>
          </div>
          <div className="card">
            <p>Total Revenue</p>
            <h2>₹{summary.totalRevenue}</h2>
          </div>
        </div>

    
        <Filters onFilter={applyFilter} />
        <OrderTable orders={filteredOrders} />
      </div>
    </>
  );
}

export default Dashboard;
