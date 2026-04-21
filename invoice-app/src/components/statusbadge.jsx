function StatusBadge({ status }) {
  return (
    <span>
      {status === "Draft" && "🟡 Draft"}
      {status === "Pending" && "🟠 Pending"}
      {status === "Paid" && "🟢 Paid"}
    </span>
  );
}

export default StatusBadge;