// eslint-disable-next-line react/prop-types
function ConfirmationDialog({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={() => {
              onClose();
            }}
            className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
