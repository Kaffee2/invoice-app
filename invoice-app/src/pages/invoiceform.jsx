import { useState, useEffect } from "react";

function InvoiceForm({ onSave, onClose, editingInvoice }) {

  const [form, setForm] = useState({
    clientName: "",
    email: "",
    total: "",
    status: "Draft",
  });

  const [errors, setErrors] = useState({});

  // ✅ FIX 1: Safe load for editing
  useEffect(() => {
    if (editingInvoice) {
      setForm({
        clientName: editingInvoice.clientName || "",
        email: editingInvoice.email || "",
        total: editingInvoice.total || "",
        status: editingInvoice.status || "Draft",
      });
    } else {
      setForm({
        clientName: "",
        email: "",
        total: "",
        status: "Draft",
      });
    }

    setErrors({});
  }, [editingInvoice]);

  const handleSubmit = () => {
    let newErrors = {};

    if (!form.clientName.trim()) {
      newErrors.clientName = "Client name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Valid email is required";
    }

    if (!form.total || Number(form.total) <= 0) {
      newErrors.total = "Total must be greater than 0";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSave({
      ...form,
      id: editingInvoice ? editingInvoice.id : Date.now(),
    });

    // reset after save
    setForm({
      clientName: "",
      email: "",
      total: "",
      status: "Draft",
    });

    setErrors({});
    onClose();
  };

  return (
    <div>
      <h2>{editingInvoice ? "Edit Invoice" : "New Invoice"}</h2>

      <input
        placeholder="Client Name"
        value={form.clientName}
        onChange={(e) =>
          setForm({ ...form, clientName: e.target.value })
        }
        style={{ border: errors.clientName ? "1px solid red" : "" }}
      />
      {errors.clientName && <p>{errors.clientName}</p>}

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        style={{ border: errors.email ? "1px solid red" : "" }}
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        placeholder="Total"
        type="number"
        value={form.total}
        onChange={(e) =>
          setForm({ ...form, total: e.target.value })
        }
        style={{ border: errors.total ? "1px solid red" : "" }}
      />
      {errors.total && <p>{errors.total}</p>}

      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default InvoiceForm;