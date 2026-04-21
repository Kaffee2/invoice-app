# invoice-app
# 🧾 Invoice Management App

## 📌 Overview
This is a React-based Invoice Management Application that allows users to create, edit, delete, and manage invoices with status filtering and theme switching.

---

## 🚀 Features

- Create invoices
- Edit invoices
- Delete invoices (with confirmation modal)
- Mark invoices as Paid
- Filter invoices by status (All / Draft / Pending / Paid)
- Light and Dark mode toggle
- Persistent data using LocalStorage
- Responsive design (mobile, tablet, desktop)
- Empty state when no invoices exist
- Invoice detail view

---

## 🏗️ Architecture

The application is built using React functional components:

- **InvoiceList** → Manages state and renders invoices
- **InvoiceForm** → Handles create and edit functionality
- **InvoiceCard** → Displays individual invoice
- **Modal** → Delete confirmation dialog
- **ThemeContext** → Global theme management

State is managed using React hooks (`useState`, `useEffect`) and persisted using `localStorage`.

---

## ⚖️ Trade-offs

- Used LocalStorage instead of a backend for simplicity
- No authentication system
- No database integration (can be added in future)
- Basic state management instead of advanced tools like Redux

---

## ♿ Accessibility

- Form inputs include proper labels
- Buttons are keyboard accessible
- Modal supports user interaction
- Good color contrast for light/dark modes
- Basic semantic HTML structure

---

## 🧠 Improvements Beyond Requirements

- Implemented dark/light theme toggle
- Added persistent storage
- Added empty state UI
- Built invoice detail view
- Enhanced validation logic
- Responsive layout across devices

---

## 🛠️ Setup Instructions

Clone the project:

```bash
git clone https://github.com/Kaffee2/invoice-app.git
