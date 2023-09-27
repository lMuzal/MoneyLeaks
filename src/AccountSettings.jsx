import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ClickableButton({ onClick, label }) {
  const [highlighted, setHighlighted] = useState(false);

  const handleClick = () => {
    onClick();
    setHighlighted(true);
  };

  return (
    <button onClick={handleClick} className={highlighted ? "highlighted" : ""}>
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
    <div>
      <input
        type="text"
        placeholder="Enter button name"
        value={newButtonName}
        onChange={(e) => setNewButtonName(e.target.value)}
      />
      <button onClick={handleInitialButtonClick}>Create Button</button>

      {buttons.map((button) => (
        <ClickableButton
          key={button.id}
          onClick={() => {}}
          label={button.label}
        />
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
