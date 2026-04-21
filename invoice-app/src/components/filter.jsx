function Filter({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Draft")}>Draft</button>
      <button onClick={() => setFilter("Pending")}>Pending</button>
      <button onClick={() => setFilter("Paid")}>Paid</button>
    </div>
  );
}

export default Filter;