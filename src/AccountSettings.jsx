import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ClickableButton({ onClick, label, className }) {
  const [highlighted, setHighlighted] = useState(false);

  const handleClick = () => {
    onClick();
    setHighlighted(true);
  };

  return (
      <button
        onClick={handleClick}
        className={`${highlighted ? "highlighted" : ""} ${className}`}
      >
        {label}
      </button>
  );
}

function App() {
  const [buttons, setButtons] = useState([]);
  const [newButtonName, setNewButtonName] = useState("");

  const handleInitialButtonClick = () => {
    if (newButtonName.trim() !== "") {
      const newButton = {
        id: Date.now(),
        label: newButtonName,
      };
      setButtons([...buttons, newButton]);
      setNewButtonName(""); // Clear the input field after creating the button
    }
  };

  return (
    <div className="flex flex-col justify-center text-amber-400 ">
      <input
        type="text"
        placeholder="Enter button name"
        value={newButtonName}
        onChange={(e) => setNewButtonName(e.target.value)}
        className="w-1/2 mx-auto text-center"
      />
      <button
        onClick={handleInitialButtonClick}
        className="w-1/4 mx-auto mt-3 border-2 rounded text-amber-400 border-amber-400"
      >
        Create Button
      </button>
      <div className="flex flex-wrap justify-center mt-5">
        {buttons.map((button) => (
          <ClickableButton
            key={button.id}
            onClick={() => {}}
            label={button.label}
            className="px-2 mx-2 mt-2 border-2 rounded text-amber-400 border-amber-400"
          />
        ))}
      </div>

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
