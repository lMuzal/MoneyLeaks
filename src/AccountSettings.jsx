/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

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
  const [dateFormat, setDateFormat] = useState("");
  const [currency, setCurrency] = useState("");
  const [budgetCategories, setBudgetCategories] = useState([]);

  useEffect(() => {
    const savedBudgetCategories = JSON.parse(
      localStorage.getItem("budgetCategories")
    );
    if (savedBudgetCategories) {
      setBudgetCategories(savedBudgetCategories);
    }
  }, []);

  const handleSaveUserCategories = (category, value) => {
    const updatedUserCategories = [...budgetCategories];
    const existingCategory = updatedUserCategories.find(
      (userCategory) => userCategory.category === category
    );

    if (existingCategory) {
      existingCategory.value = value;
    } else {
      updatedUserCategories.push({ category, value });
    }

    setBudgetCategories(updatedUserCategories);

    // Use updatedUserCategories here, not budgetCategories
    localStorage.setItem(
      "budgetCategories",
      JSON.stringify(updatedUserCategories)
    );
  };

  useEffect(() => {
    let savedCategories = JSON.parse(localStorage.getItem("groups"));

    if (!savedCategories || savedCategories.length === 0) {
      savedCategories = [
        { label: "Bills", group: "Expense", subgroups: [] },
        { label: "Salary", group: "Income", subgroups: [] },
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

  console.log(initialBalance);

  useEffect(() => {
    const currency = JSON.parse(localStorage.getItem("currency"));
    if (currency) {
      setCurrency(currency);
    }
  }, []);

  useEffect(() => {
    if (currency) localStorage.setItem("currency", JSON.stringify(currency));
  }, [currency]);

  useEffect(() => {
    const dateFormat = JSON.parse(localStorage.getItem("dateFormat"));
    if (dateFormat) {
      setDateFormat(dateFormat);
    }
  }, []);

  useEffect(() => {
    if (dateFormat)
      localStorage.setItem("dateFormat", JSON.stringify(dateFormat));
  }, [dateFormat]);

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

  const handleFormatChange = (e) => {
    setDateFormat(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  console.log(currency);

  return (
    <div className="flex flex-col mt-24 ">
      <div className="w-full text-center border-b-2 border-dashed border-amber-400/50">
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
      </div>
      <div className="w-full text-center border-b-2 border-dashed border-amber-400/50">
        <button
          onClick={() => {
            handleToggle(1);
            handleToggle(4);
          }}
        >
          <h1 className="mx-auto text-4xl tracking-wider text-amber-400 ">
            BUDGET SETUP
          </h1>
        </button>
        {isVisible[1] && (
          <div className="flex flex-col justify-items-center">
            <div className="flex flex-row justify-center">
              {mainCategories
                .filter((button) => button.group === selectedGroup)
                .map((button, index) => (
                  <div key={index}>
                    <label className="flex px-2 my-6">
                      <input
                        type="radio"
                        name="budgetCategories"
                        value={button.label}
                        checked={selectedCategory === button.label}
                        onClick={(e) => {
                          handleSelectedCategoryChange(e, index);
                        }}
                        className="appearance-none peer"
                      />
                      <div className="px-2 font-bold duration-300 ease-in-out border rounded h-7 text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
                        {button.label}
                      </div>
                    </label>
                  </div>
                ))}
            </div>
          </div>
        )}
        {selectedCategory && isVisible[4] && (
          <div className="flex flex-col justify-center mb-6 basis-full">
            <input
              type="number"
              placeholder={`Enter value for ${selectedCategory}`}
              value={
                budgetCategories.find(
                  (userCategory) => userCategory.category === selectedCategory
                )?.value || ""
              }
              onChange={(e) =>
                handleSaveUserCategories(selectedCategory, e.target.value)
              }
              className="px-3 mx-auto mt-2 text-center"
            />
          </div>
        )}
      </div>
      <div className="w-full text-center border-b-2 border-dashed border-amber-400/50">
        <button onClick={() => handleToggle(2)}>
          <h1 className="mx-auto text-4xl tracking-wider text-amber-400">
            CATEGORY SETUP
          </h1>
        </button>
        {isVisible[2] && (
          <div className="flex flex-col justify-center mt-5">
            <input
              type="text"
              placeholder="Enter category name"
              value={buttonLabel}
              onChange={handleButtonLabelChange}
              className="mx-auto text-center"
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
              className="px-2 pb-1 mx-auto mt-3 bg-green-700 border-2 rounded text-amber-400 border-amber-400"
            >
              Add Category
            </button>
          </div>
        )}
        {isVisible[2] && (
          <div className="flex flex-row flex-wrap justify-center mb-4">
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
                    <div className="absolute z-50 p-2 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded top-1/2 left-1/2">
                      <p className="pb-4">
                        Are you sure you want to delete {button.label} category?{" "}
                        <br></br>
                        *Deleting this category will result in deleting all of
                        its sub-categories and budget
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
              <div className="flex flex-col justify-center basis-full">
                <input
                  type="text"
                  placeholder="Enter sub-category name"
                  value={subcategoryLabel}
                  onChange={handleSubcategoryLabelChange}
                  className="px-3 mx-auto mt-10 text-center"
                />
                <button
                  onClick={handleAddSubgroup}
                  className="px-2 pb-1 mx-auto mt-2 bg-blue-700 border-2 rounded text-amber-400 border-amber-400"
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
                            <div className="absolute z-50 p-2 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded top-1/2 left-1/2">
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
      <div className="text-center border-b-2 border-dashed border-amber-400/50">
        <button onClick={() => handleToggle(3)}>
          <h1 className="mx-auto text-4xl tracking-wider text-amber-400 ">
            CURRENCY
          </h1>
        </button>
        {isVisible[3] && (
          <div className="flex flex-col pb-4 mx-auto">
            <label htmlFor="currencySelect" className="text-amber-400">
              Select currency:
            </label>
            <input
              id="currencySelect"
              value={currency}
              placeholder="Enter currency symbol"
              onChange={handleCurrencyChange}
              className="w-1/3 mx-auto text-center"
            ></input>

            <label htmlFor="dateFormatSelect" className="text-amber-400">
              Select date format:
            </label>
            <select
              id="dateFormatSelect"
              value={dateFormat}
              onChange={handleFormatChange}
              className="w-1/3 mx-auto text-center"
            >
              <option value="DD/MM/YYYY">DD-MM-YYYY</option>
              <option value="MM/DD/YYYY">MM-DD-YYYY</option>
              <option value="YYYY/MM/DD">YYYY-MM-DD</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
