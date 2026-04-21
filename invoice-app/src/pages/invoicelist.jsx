import { useState, useEffect } from "react";
import InvoiceCard from "../components/invoicecard";
import InvoiceForm from "../components/InvoiceForm";
import Modal from "../components/modal";

function InvoiceList() {
  const [invoices, setInvoices] = useState(() => {
    const saved = localStorage.getItem("invoices");
    return saved ? JSON.parse(saved) : [];
  });

  const [deleteId, setDeleteId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("All");
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  // DELETE
  const confirmDelete = () => {
    setInvoices(invoices.filter((inv) => inv.id !== deleteId));
    setDeleteId(null);
  };

  // MARK AS PAID
  const markAsPaid = (id) => {
    setInvoices(
      invoices.map((inv) =>
        inv.id === id ? { ...inv, status: "Paid" } : inv
      )
    );
  };

  // ADD OR UPDATE
  const saveInvoice = (invoice) => {
    setInvoices((prev) => {
      const exists = prev.find((inv) => inv.id === invoice.id);

      if (exists) {
        return prev.map((inv) =>
          inv.id === invoice.id ? invoice : inv
        );
      }

      return [...prev, invoice];
    });

    setEditingInvoice(null);
    setShowForm(false);
  };

  // FILTER
  const filteredInvoices =
    filter === "All"
      ? invoices
      : invoices.filter((inv) => inv.status === filter);

  return (
    <div>
      <h1>Invoices</h1>

      <button
        onClick={() => {
          setEditingInvoice(null);
          setShowForm(true);
        }}
      >
        New Invoice
      </button>

      {/* FILTER */}
      <div className="filter-bar">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Draft")}>Draft</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("Paid")}>Paid</button>
      </div>

      {/* FORM */}
      {showForm && (
        <InvoiceForm
          onSave={saveInvoice}
          onClose={() => {
            setShowForm(false);
            setEditingInvoice(null);
          }}
          editingInvoice={editingInvoice}
        />
      )}

      {/* EMPTY STATE */}
      {filteredInvoices.length === 0 && (
        <div className="empty-state">
          <p>No invoices found</p>
        </div>
      )}

      {/* LIST */}
      {filteredInvoices.map((invoice) => (
        <InvoiceCard
          key={invoice.id}
          invoice={invoice}
          onDelete={(id) => setDeleteId(id)}
          onEdit={(inv) => {
            setEditingInvoice(inv);
            setShowForm(true);
          }}
          onMarkPaid={markAsPaid}
          onClick={() => setSelectedInvoice(invoice)}
        />
      ))}

      {/* DELETE MODAL */}
      {deleteId && (
        <Modal
          onConfirm={confirmDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}

      {/* OPTIONAL DETAIL VIEW */}
      {selectedInvoice && (
        <div className="detail-view">
          <h2>Invoice Details</h2>
          <p>Client: {selectedInvoice.clientName}</p>
          <p>Email: {selectedInvoice.email}</p>
          <p>Total: {selectedInvoice.total}</p>
          <p>Status: {selectedInvoice.status}</p>

          <button onClick={() => setSelectedInvoice(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default InvoiceList;