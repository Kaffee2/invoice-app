function Modal({ onConfirm, onCancel }) {
  return (
    <div
      className="modal-overlay"
      onClick={onCancel}
    >
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <p>Are you sure you want to delete?</p>

        <div className="modal-actions">
          <button onClick={onConfirm}>
            Yes
          </button>

          <button onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;