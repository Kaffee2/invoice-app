function InvoiceDetail({ invoice, onBack }) {
  if (!invoice) return null;

  return (
    <div>
      <button onClick={onBack}>Back</button>

      <h2>Invoice Details</h2>

      <p><b>Client:</b> {invoice.clientName}</p>
      <p><b>Email:</b> {invoice.email}</p>
      <p><b>Total:</b> ${invoice.total}</p>
      <p><b>Status:</b> {invoice.status}</p>
    </div>
  );
}

export default InvoiceDetail;