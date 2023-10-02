import { useState } from 'react';

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
    <div className="flex items-center space-x-2">
      <button
        onClick={handleClick}
        className={`${
          highlighted ? 'bg-yellow-300' : 'bg-blue-500'
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
          <div className="p-4 bg-white rounded-lg shadow-md">
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
  const [subButtons, setSubButtons] = useState([]); // Track sub-buttons
  const [selectedButton, setSelectedButton] = useState(null); // Track the previously chosen button
  const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected category

  const handleInitialButtonClick = () => {
    if (newButtonName.trim() !== "" && buttonCategory !== null) {
      const newButton = {
        id: Date.now(),
        label: newButtonName,
        category: buttonCategory,
      };
      setButtons([...buttons, newButton]);
      setNewButtonName(""); // Clear the input field after creating the button
      setSelectedButton(newButton); // Set the selected button as the newly created one
    }
  };

  const handleDeleteButton = (id) => {
      const updatedButtons = buttons.filter((button) => button.id !== id);
      setButtons(updatedButtons);

      // Clear sub-buttons if the selected button is deleted
      if (selectedButton && selectedButton.id === id) {
        setSubButtons([]);
        setSelectedButton(null);
      }
  };

  const handleCreateSubGroup = () => {
    if (selectedButton) {
      setSubButtons([]);
    }
  };

  const handleCreateSubButton = () => {
    if (selectedButton && newButtonName.trim() !== "") {
      const newSubButton = {
        id: Date.now(),
        label: newButtonName,
      };
      setSubButtons([...subButtons, newSubButton]);
      setNewButtonName(""); // Clear the input field after creating the sub-button
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter button name"
        value={newButtonName}
        onChange={(e) => setNewButtonName(e.target.value)}
      />
      <div className="my-2">
        <button
          onClick={() => {
            setButtonCategory("Expense");
            setSelectedCategory("Expense");
          }}
          className={`mr-2 ${
            selectedCategory === "Expense"
              ? "bg-red-500 text-white"
              : "bg-gray-300"
          }`}
        >
          Expense
        </button>
        <button
          onClick={() => {
            setButtonCategory("Income");
            setSelectedCategory("Income");
          }}
          className={`mr-2 ${
            selectedCategory === "Income"
              ? "bg-green-500 text-white"
              : "bg-gray-300"
          }`}
        >
          Income
        </button>
      </div>
      <button onClick={handleInitialButtonClick}>Create Button</button>

      {buttons.map((button) => (
        <div key={button.id} className="my-4">
          {button.category === selectedCategory && (
            <>
              <h2>
                {selectedCategory === "Expense"
                  ? "Expense Buttons:"
                  : "Income Buttons:"}
              </h2>
              <ClickableButton
                onClick={() => setSelectedButton(button)}
                onDelete={() => handleDeleteButton(button.id, button.label)}
                label={button.label}
                className="font-bold text-white"
              />
            </>
          )}
        </div>
      ))}

      {selectedButton && (
        <div className="my-4">
          <h2>Sub-Buttons for "{selectedButton.label}":</h2>
          <div>
            <button
              onClick={handleCreateSubGroup}
              className="px-2 py-1 text-white bg-blue-500 rounded-full"
            >
              Create Sub-Group
            </button>
            <input
              type="text"
              placeholder="Enter sub-button name"
              value={newButtonName}
              onChange={(e) => setNewButtonName(e.target.value)}
            />
            <button
              onClick={handleCreateSubButton}
              className="px-2 py-1 text-white bg-green-500 rounded-full"
            >
              Create Sub-Button
            </button>
          </div>
          {subButtons.map((subButton) => (
            <div key={subButton.id} className="mt-2">
              <ClickableButton
                onClick={() => {}}
                onDelete={() =>
                  handleDeleteButton(subButton.id, subButton.label)
                }
                label={subButton.label}
                className="font-bold text-white"
              />
            </div>
          ))}
        </div>
      )}

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
