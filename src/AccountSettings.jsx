import { useState } from "react";

function DynamicButtonGroupSelector() {
  const [buttonLabel, setButtonLabel] = useState("");
  const [buttons, setButtons] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("expense");
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonLabelChange = (e) => {
    setButtonLabel(e.target.value);
  };

  const handleAddButton = () => {
    if (buttonLabel.trim() !== "") {
      const newButton = { label: buttonLabel, group: selectedGroup };
      setButtons([...buttons, newButton]);
      setButtonLabel("");
    }
  };

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
    setSelectedButton("");
  };

  const handleSelectedButtonChange = (e) => {
    setSelectedButton(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <input
          type="text"
          placeholder="Enter button label"
          value={buttonLabel}
          onChange={handleButtonLabelChange}
          className="text-center"
        />

        <div className="flex flex-row justify-center">
          <label>
            <input
              type="radio"
              name="group"
              value="expense"
              checked={selectedGroup === "expense"}
              onChange={handleGroupChange}
              className="appearance-none peer"
            />
            <div className="px-2 mx-1 mt-2 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 py-1/2 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
              Expense
            </div>
          </label>
          <label>
            <input
              type="radio"
              name="group"
              value="income"
              checked={selectedGroup === "income"}
              onChange={handleGroupChange}
              className="appearance-none peer"
            />
            <div className="px-2 mx-1 mt-2 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 py-1/2 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
              Income
            </div>
          </label>
        </div>

        <button
          onClick={handleAddButton}
          className="w-full px-2 pb-1 mt-5 border-2 rounded text-amber-400 border-amber-400"
        >
          Add Button
        </button>
      </div>
      <div className="flex flex-row justify-center">
        {buttons
          .filter((button) => button.group === selectedGroup)
          .map((button, index) => (
            <label key={index}>
              <input
                type="radio"
                name="userButtons"
                value={button.label}
                checked={selectedButton === button.label}
                onChange={handleSelectedButtonChange}
                className="appearance-none peer"
              />
              <div className="px-2 mx-1 mt-2 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 py-1/2 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
                {button.label}
              </div>
            </label>
          ))}
      </div>
    </div>
  );
}

export default DynamicButtonGroupSelector;
