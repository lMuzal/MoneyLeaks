import { useState, useEffect } from "react";

function DynamicButtonGroupSelector() {
  const [buttonLabel, setButtonLabel] = useState("");
  const [buttons, setButtons] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("expense");
  const [selectedButton, setSelectedButton] = useState("");
  const [subgroupLabel, setSubgroupLabel] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(null);
  const [showDeleteSubgroupConfirmation, setShowDeleteSubgroupConfirmation] =
    useState(null);
  const [selectedSubgroup, setSelectedSubgroup] = useState("");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  // Load the saved buttons from local storage when the component mounts
  useEffect(() => {
    const savedButtons = localStorage.getItem("buttons");
    if (savedButtons) {
      setButtons(JSON.parse(savedButtons));
    }
  }, []);

  // Save the buttons to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("buttons", JSON.stringify(buttons));
  }, [buttons]);

  const handleButtonLabelChange = (e) => {
    setButtonLabel(e.target.value);
  };

  const handleAddButton = () => {
    if (buttonLabel.trim() !== "") {
      const newButton = {
        label: buttonLabel,
        group: selectedGroup,
        subgroups: [],
      };
      setButtons([...buttons, newButton]);
      setButtonLabel("");
    }
  };

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
    setSelectedButton("");
    setSelectedSubgroup("");
    setSubgroupLabel("");
  };

  const handleSelectedButtonChange = (e, index) => {
    setSelectedButton(e.target.value);
    setSelectedButtonIndex(index);
    setSelectedSubgroup("");
    setSubgroupLabel("");
  };

  const handleSubgroupLabelChange = (e) => {
    setSubgroupLabel(e.target.value);
  };

  const handleAddSubgroup = () => {
    if (subgroupLabel.trim() !== "" && selectedButton !== "") {
      const updatedButtons = [...buttons];
      updatedButtons[selectedButtonIndex].subgroups.push({
        label: subgroupLabel,
      });
      setButtons(updatedButtons);
      setSubgroupLabel("");
    }
  };

  const confirmDelete = () => {
    if (showDeleteConfirmation) {
      const updatedButtons = buttons.filter(
        (button) => button.label !== showDeleteConfirmation
      );
      setButtons(updatedButtons);
      setSelectedButton("");
      setShowDeleteConfirmation(null);
    }
  };

  const confirmDeleteSubgroup = () => {
    if (showDeleteSubgroupConfirmation) {
      const updatedButtons = [...buttons];
      updatedButtons[selectedButtonIndex].subgroups = updatedButtons[
        selectedButtonIndex
      ].subgroups.filter(
        (subgroup) =>
          subgroup.label !== showDeleteSubgroupConfirmation.subgroupLabel
      );
      setButtons(updatedButtons);
      setSelectedSubgroup("");
      setShowDeleteSubgroupConfirmation(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(null);
    setShowDeleteSubgroupConfirmation(null);
  };

  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <input
          type="text"
          placeholder="Enter category name"
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
            <div className="px-2 mx-1 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
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
            <div className="px-2 mx-1 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
              Income
            </div>
          </label>
        </div>

        <button
          onClick={handleAddButton}
          className="w-full px-2 pb-1 mt-3 bg-green-700 border-2 rounded text-amber-400 border-amber-400"
        >
          Add Category
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {buttons
          .filter((button) => button.group === selectedGroup)
          .map((button, index) => (
            <div key={index}>
              <label className="flex px-2 mt-3">
                <input
                  type="radio"
                  name="userButtons"
                  value={button.label}
                  checked={selectedButton === button.label}
                  onChange={(e) => handleSelectedButtonChange(e, index)}
                  className="appearance-none peer"
                />
                <div className="px-2 mt-2 font-bold duration-300 ease-in-out border rounded h-7 text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
                  {button.label}
                </div>
                <button
                  onClick={() => setShowDeleteConfirmation(button.label)}
                  className="px-2 mt-2 bg-red-700 border rounded h-7 text-amber-400 border-amber-400"
                >
                  X
                </button>
              </label>

              {showDeleteConfirmation === button.label && (
                <div className="absolute z-50 w-3/4 p-2 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded top-1/2 left-1/2">
                  <p>
                    Are you sure you want to delete this category? <br></br>
                    *Deleting this category will result in deleting any of its
                    created sub-categories
                  </p>
                  <button
                    onClick={confirmDelete}
                    className="px-2 py-1 mx-2 text-white bg-red-700 rounded"
                  >
                    Yes
                  </button>
                  <button
                    onClick={cancelDelete}
                    className="px-2 py-1 mx-2 text-white bg-green-700 rounded"
                  >
                    No
                  </button>
                </div>
              )}
            </div>
          ))}

        {selectedButton && (
          <div className="flex flex-col justify-center mt-10 basis-full">
            <input
              type="text"
              placeholder="Enter sub-category name"
              value={subgroupLabel}
              onChange={handleSubgroupLabelChange}
              className="px-3 mx-auto mt-2 text-center"
            />

            <button
              onClick={handleAddSubgroup}
              className="w-1/2 px-2 mx-auto mt-2 bg-blue-700 border-2 rounded text-amber-400 border-amber-400"
            >
              Add Sub-category
            </button>

            <div className="flex flex-row flex-wrap justify-center">
              {buttons[selectedButtonIndex].subgroups.map(
                (subgroup, sIndex) => (
                  <div key={sIndex}>
                    <label className="flex px-2 mt-3">
                      <input
                        type="radio"
                        name="subgroupButtons"
                        value={subgroup.label}
                        checked={selectedSubgroup === subgroup.label}
                        onChange={() => setSelectedSubgroup(subgroup.label)}
                        className="appearance-none peer"
                      />
                      <div className="px-2 mt-2 font-bold duration-300 ease-in-out border rounded h-7 text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
                        {subgroup.label}
                      </div>
                      <button
                        onClick={() =>
                          setShowDeleteSubgroupConfirmation({
                            buttonLabel: buttons[selectedButtonIndex].label,
                            subgroupLabel: subgroup.label,
                          })
                        }
                        className="px-2 mt-2 bg-red-700 border rounded h-7 text-amber-400 border-amber-400"
                      >
                        X
                      </button>
                    </label>

                    {showDeleteSubgroupConfirmation &&
                      showDeleteSubgroupConfirmation.buttonLabel ===
                        buttons[selectedButtonIndex].label &&
                      showDeleteSubgroupConfirmation.subgroupLabel ===
                        subgroup.label && (
                        <div className="absolute z-50 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
                          <p>
                            Are you sure you want to delete this{" "}
                            {buttons[selectedButtonIndex].label} sub-category?
                          </p>
                          <button
                            onClick={confirmDeleteSubgroup}
                            className="px-2 py-1 mx-2 text-white bg-red-700 rounded"
                          >
                            Yes
                          </button>
                          <button
                            onClick={cancelDelete}
                            className="px-2 py-1 mx-2 text-white bg-green-700 rounded"
                          >
                            No
                          </button>
                        </div>
                      )}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DynamicButtonGroupSelector;
