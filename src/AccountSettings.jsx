/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

export default function AccountSettings() {
  const [buttonLabel, setButtonLabel] = useState("");
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("Expense");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategoryLabel, setSubcategoryLabel] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(null);
  const [showDeleteSubgroupConfirmation, setShowDeleteSubgroupConfirmation] =
    useState(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [initialBalance, setInitialBalance] = useState(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let savedCategories = JSON.parse(localStorage.getItem("groups"));

    if (!savedCategories || savedCategories.length === 0) {
      savedCategories = [
        { label: "Default Expense Category", group: "Expense", subgroups: [] },
        { label: "Default Income Category", group: "Income", subgroups: [] },
      ];

      localStorage.setItem("groups", JSON.stringify(savedCategories));
    }

    setMainCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (mainCategories.length > 0)
      localStorage.setItem("groups", JSON.stringify(mainCategories));
  }, [mainCategories]);

  useEffect(() => {
    const initialBalance = JSON.parse(localStorage.getItem("initialBalance"));
    if (initialBalance) {
      setInitialBalance(initialBalance);
    }
  }, []);

  useEffect(() => {
    if (initialBalance)
      localStorage.setItem("initialBalance", JSON.stringify(initialBalance));
  }, [initialBalance]);

  const handleButtonLabelChange = (e) => {
    setButtonLabel(e.target.value);
  };

  const handleAddButton = () => {
    if (buttonLabel.trim() !== "") {
      const newButton = {
        group: selectedGroup,
        label: buttonLabel,
        subgroups: [],
      };

      setMainCategories([...mainCategories, newButton]);
      setButtonLabel("");
    }
  };

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
    setSelectedCategory("");
    setSubcategoryLabel("");
  };

  const handleSelectedCategoryChange = (e, index) => {
    setSelectedCategory(e.target.value);
    setSelectedCategoryIndex(
      mainCategories.findIndex((button) => button.label === e.target.value)
    );
    setSubcategoryLabel("");
  };

  const handleSubcategoryLabelChange = (e) => {
    setSubcategoryLabel(e.target.value);
  };

  const handleAddSubgroup = () => {
    if (subcategoryLabel.trim() !== "" && selectedCategory !== "") {
      setMainCategories((prevMainCategories) => {
        const updatedCategories = [...prevMainCategories];

        const buttonToUpdate = updatedCategories.find(
          (button) => button.label === selectedCategory
        );

        if (buttonToUpdate) {
          const subgroupExists = buttonToUpdate.subgroups.some(
            (subgroup) => subgroup.label === subcategoryLabel
          );

          if (!subgroupExists) {
            buttonToUpdate.subgroups.push({
              label: subcategoryLabel,
              category: selectedGroup,
            });
          }
        }

        return updatedCategories;
      });

      setSubcategoryLabel("");
    }
  };

  const confirmDelete = () => {
    if (showDeleteConfirmation) {
      const updatedCategories = mainCategories.filter(
        (button) => button.label !== showDeleteConfirmation
      );
      setMainCategories(updatedCategories);
      setSelectedCategory("");
      setShowDeleteConfirmation(null);
    }
  };

  const confirmDeleteSubgroup = () => {
    if (showDeleteSubgroupConfirmation) {
      const updatedCategories = [...mainCategories];
      updatedCategories[selectedCategoryIndex].subgroups = updatedCategories[
        selectedCategoryIndex
      ].subgroups.filter(
        (subgroup) =>
          subgroup.label !== showDeleteSubgroupConfirmation.subcategoryLabel
      );
      setMainCategories(updatedCategories);
      setShowDeleteSubgroupConfirmation(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(null);
    setShowDeleteSubgroupConfirmation(null);
  };

  const handleStartingBalanceChange = (e) => {
    setInitialBalance(e.target.value);
  };

  const handleToggle = (index) => {
    setIsVisible((prev) => {
      return { ...prev, [index]: !prev[index] };
    });
  };

  return (
    <div className="flex flex-col mt-24">
      <button onClick={() => handleToggle(0)}>
        <h1 className="mx-auto text-4xl tracking-wider text-amber-400">
          INITIAL BALANCE
        </h1>
      </button>
      {isVisible[0] && (
        <div className="pb-4 mx-auto">
          <input
            type="number"
            placeholder="Enter initial balance"
            value={initialBalance}
            onChange={handleStartingBalanceChange}
            className="text-center"
          />
        </div>
      )}
      <button onClick={() => handleToggle(1)}>
        <h1 className="mx-auto text-4xl tracking-wider text-amber-400">
          BUDGET SETUP
        </h1>
      </button>
      <button onClick={() => handleToggle(2)}>
        <h1 className="mx-auto text-4xl tracking-wider text-amber-400">
          CATEGORY SETUP
        </h1>
      </button>
      {isVisible[2] && (
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
                value="Expense"
                checked={selectedGroup === "Expense"}
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
                value="Income"
                checked={selectedGroup === "Income"}
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
      )}
      {isVisible[2] && (
        <div className="flex flex-row flex-wrap justify-center">
          {mainCategories
            .filter((button) => button.group === selectedGroup)
            .map((button, index) => (
              <div key={index}>
                <label className="flex px-2 mt-3">
                  <input
                    type="radio"
                    name="userCategories"
                    value={button.label}
                    checked={selectedCategory === button.label}
                    onChange={(e) => handleSelectedCategoryChange(e, index)}
                    className="appearance-none peer"
                  />
                  <div className="px-2 mt-2 font-bold duration-300 ease-in-out border rounded-l h-7 text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
                    {button.label}
                  </div>
                  <button
                    onClick={() => setShowDeleteConfirmation(button.label)}
                    className="px-2 mt-2 font-bold bg-red-700 border rounded-r h-7 text-amber-400 border-amber-400"
                  >
                    X
                  </button>
                </label>

                {showDeleteConfirmation === button.label && (
                  <div className="absolute z-50 w-3/4 p-2 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded top-1/2 left-1/2">
                    <p className="pb-4">
                      Are you sure you want to delete this category? <br></br>
                      *Deleting this category will result in deleting all of its
                      sub-categories
                    </p>
                    <button
                      onClick={confirmDelete}
                      className="px-4 py-1 mx-2 text-white bg-red-700 rounded"
                    >
                      Yes
                    </button>
                    <button
                      onClick={cancelDelete}
                      className="px-4 py-1 mx-2 text-white bg-green-700 rounded"
                    >
                      No
                    </button>
                  </div>
                )}
              </div>
            ))}

          {selectedCategory && (
            <div className="flex flex-col justify-center mt-10 basis-full">
              <input
                type="text"
                placeholder="Enter sub-category name"
                value={subcategoryLabel}
                onChange={handleSubcategoryLabelChange}
                className="px-3 mx-auto mt-2 text-center"
              />
              <button
                onClick={handleAddSubgroup}
                className="w-1/2 px-2 mx-auto mt-2 bg-blue-700 border-2 rounded text-amber-400 border-amber-400"
              >
                Add Sub-category
              </button>
              <div className="flex flex-row flex-wrap justify-center">
                {mainCategories[selectedCategoryIndex].subgroups
                  .filter((subgroup) => subgroup.category === selectedGroup)
                  .map((subgroup, sIndex) => (
                    <div key={sIndex}>
                      <label className="flex px-2 mt-3">
                        <input
                          type="radio"
                          name="subgroupCategories"
                          value={subgroup.label}
                          className="appearance-none peer"
                        />
                        <div className="px-2 mt-2 font-bold duration-300 ease-in-out border rounded-l h-7 text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
                          {subgroup.label}
                        </div>
                        <button
                          onClick={() =>
                            setShowDeleteSubgroupConfirmation({
                              buttonLabel:
                                mainCategories[selectedCategoryIndex].label,
                              subcategoryLabel: subgroup.label,
                            })
                          }
                          className="px-2 mt-2 font-bold bg-red-700 border rounded-r h-7 text-amber-400 border-amber-400"
                        >
                          X
                        </button>
                      </label>

                      {showDeleteSubgroupConfirmation &&
                        showDeleteSubgroupConfirmation.buttonLabel ===
                          mainCategories[selectedCategoryIndex].label &&
                        showDeleteSubgroupConfirmation.subcategoryLabel ===
                          subgroup.label && (
                          <div className="absolute z-50 w-3/4 p-2 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded top-1/2 left-1/2">
                            <p className="pb-4">
                              Are you sure you want to delete this{" "}
                              {mainCategories[selectedCategoryIndex].label}{" "}
                              sub-category?
                            </p>
                            <button
                              onClick={confirmDeleteSubgroup}
                              className="px-4 py-1 mx-2 text-white bg-red-700 rounded"
                            >
                              Yes
                            </button>
                            <button
                              onClick={cancelDelete}
                              className="px-4 py-1 mx-2 text-white bg-green-700 rounded"
                            >
                              No
                            </button>
                          </div>
                        )}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
