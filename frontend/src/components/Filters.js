function Filters({ onFilter }) {
  return (
    <div className="filters">
      <input type="date" onChange={(e) => onFilter("from", e.target.value)} />
      <input type="date" onChange={(e) => onFilter("to", e.target.value)} />
      <input
        placeholder="Search Order ID"
        onChange={(e) => onFilter("orderId", e.target.value)}
      />
      <button onClick={() => onFilter("reset")}>Reset</button>
    </div>
  );
}

export default Filters;
