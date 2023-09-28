import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ClickableButton({ onClick, onDelete, label, className }) {
  const [highlighted, setHighlighted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClick = () => {
    onClick();
    setHighlighted(true);
  };

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="flex justify-center space-x-2">
      <button
        onClick={handleClick}
        className={`${
          highlighted ? "bg-yellow-300" : "bg-blue-500"
        } px-4 py-2 rounded ${className}`}
      >
        {label}
      </button>
      <button
        onClick={handleDelete}
        className="px-2 py-1 text-white bg-red-500 rounded-full"
      >
        Delete
      </button>

      {showConfirmation && (
        <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full">
          <div className="p-4 bg-white rounded-lg">
            <p className="mb-4">{`Are you sure you want to delete "${label}"?`}</p>
            <div className="flex justify-end">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 mr-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [buttons, setButtons] = useState([]);
  const [newButtonName, setNewButtonName] = useState("");
  const [buttonCategory, setButtonCategory] = useState(null); // Track the category of the previous button

  const handleInitialButtonClick = () => {
    if (newButtonName.trim() !== "" && buttonCategory !== null) {
      const newButton = {
        id: Date.now(),
        label: newButtonName,
        category: buttonCategory,
      };
      setButtons([...buttons, newButton]);
      setNewButtonName(""); // Clear the input field after creating the button
    }
  };

  const handleDeleteButton = (id) => {
      const updatedButtons = buttons.filter((button) => button.id !== id);
      setButtons(updatedButtons);
  };

  return (
    <div className="flex flex-col justify-center mx-auto">
      <input
        type="text"
        placeholder="Enter button name"
        value={newButtonName}
        onChange={(e) => setNewButtonName(e.target.value)}
        className="w-1/2 mx-auto text-center"
      />
      <div className="mx-auto my-2">
        <button
          onClick={() => setButtonCategory("Expense")}
          className={`mr-2  px-2 rounded ${
            buttonCategory === "Expense"
              ? "bg-red-500 text-white"
              : "bg-gray-300"
          }`}
        >
          Expense
        </button>
        <button
          onClick={() => setButtonCategory("Income")}
          className={`mr-2 px-2 rounded ${
            buttonCategory === "Income"
              ? "bg-green-500 text-white"
              : "bg-gray-300"
          }`}
        >
          Income
        </button>
      </div>
      <button onClick={handleInitialButtonClick} className="w-1/2 mx-auto border-2 rounded text-amber-400 border-amber-400">Create Button</button>

      {buttons.map((button) => (
        <div key={button.id} className="mx-auto my-4">
          <h2 className="mx-auto text-amber-400">
            {button.category === "Expense"
              ? "Expense Buttons:"
              : "Income Buttons:"}
          </h2>
          <ClickableButton
            onClick={() => {}}
            onDelete={() => handleDeleteButton(button.id, button.label)}
            label={button.label}
            className="font-bold text-white"
          />
        </div>
      ))}

      <style>
        {`
          .highlighted {
            background-color: yellow;
          }
        `}
      </style>
    </div>
  );
}

export default App;
