function InvoiceCard({ invoice, onDelete, onEdit, onMarkPaid }) {
  if (!invoice) return null;

  const statusClass = invoice.status
    ? invoice.status.toLowerCase()
    : "draft";

  return (
    <div className="invoice-card">

      {/* TOP SECTION */}
      <div className="top">
        <h3>{invoice.clientName || "No Name"}</h3>
        <p className="amount">
          ${invoice.total || 0}
        </p>
      </div>

      {/* STATUS */}
      <div className={`status ${statusClass}`}>
        {invoice.status || "Draft"}
      </div>

      {/* ACTIONS */}
      <div className="actions">

        <button
          onClick={() => onEdit && onEdit(invoice)}
        >
          Edit
        </button>

        <button
          onClick={() => onMarkPaid && onMarkPaid(invoice.id)}
          disabled={invoice.status === "Paid"}
        >
          Mark as Paid
        </button>

        <button
          onClick={() => onDelete && onDelete(invoice.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default InvoiceCard;