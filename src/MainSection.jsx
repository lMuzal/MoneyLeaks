/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MainSection() {
  const [selectedGroup, setSelectedGroup] = useState("Expense");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [formEntries, setFormEntries] = useState([]);
  const [initialBalance, setInitialBalance] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [entryToDelete, setEntryToDelete] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(null);
  const [parsedCategories, setParsedCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateFormat, setDateFormat] = useState("dd-MM-yyyy");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    const currency = JSON.parse(localStorage.getItem("currency"));
    if (currency) {
      setCurrency(currency);
    }
  }, [currency]);

  useEffect(() => {
    const dateFormat = JSON.parse(localStorage.getItem("dateFormat"));
    if (dateFormat) {
      setDateFormat(dateFormat);
    }
  }, [dateFormat]);

  useEffect(() => {
    const initialBalance = JSON.parse(localStorage.getItem("initialBalance"));
    setInitialBalance(initialBalance);
  }, [initialBalance]);

  useEffect(() => {
    if (currentBalance) {
      const currentBalance = JSON.parse(localStorage.getItem("currentBalance"));
      setCurrentBalance(currentBalance);
    } else setCurrentBalance(initialBalance);
  }, [currentBalance, initialBalance]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];

    if (!savedEntries || savedEntries.length === 0) {
      const initialEntry = {
        amount: "0",
        date: new Date().toLocaleDateString(),
        group: "Expense",
        category: "Example Category",
        subcategory: "Example Subcategory",
      };

      localStorage.setItem("formEntries", JSON.stringify([initialEntry]));

      setFormEntries([initialEntry]);
    } else {
      setFormEntries(savedEntries);
    }

    const savedCategories = JSON.parse(localStorage.getItem("groups"));

    if (!savedCategories || savedCategories.length === 0) {
      const initialButtons = [
        { label: "Bills", group: "Expense", subgroups: [] },
        { label: "Salary", group: "Income", subgroups: [] },
      ];

      localStorage.setItem("groups", JSON.stringify(initialButtons));

      setParsedCategories(initialButtons);
    } else {
      setParsedCategories(savedCategories);
    }
  }, []);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    setFormEntries(savedEntries);
  }, []);

  useEffect(() => {
    const totalExpense = formEntries
      .filter((entry) => entry.group === "Expense")
      .reduce((sum, entry) => sum + parseFloat(entry.amount), 0);

    const totalIncome = formEntries
      .filter((entry) => entry.group === "Income")
      .reduce((sum, entry) => sum + parseFloat(entry.amount), 0);

    const newCurrentBalance =
      parseFloat(initialBalance) +
      parseFloat(totalIncome) -
      parseFloat(totalExpense);

    setCurrentBalance(newCurrentBalance);

    localStorage.setItem("totalExpense", JSON.stringify(totalExpense));
    localStorage.setItem("totalIncome", JSON.stringify(totalIncome));
    localStorage.setItem("currentBalance", JSON.stringify(newCurrentBalance));
  }, [formEntries, initialBalance]);

  const handleMainButtonChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedGroup("");
  };

  const handleSelectedGroupChange = (e, index) => {
    setSelectedGroup(e.target.value);
    setSelectedCategoryIndex(
      parsedCategories.findIndex((button) => button.label === e.target.value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newEntry = {
      amount: formData.get("Amount"),
      date: formData.get("Date"),
      group: selectedCategory,
      category: selectedGroup,
      subcategory: formData.get("subcategory"),
    };

    setFormEntries([...formEntries, newEntry]);

    const entryAmount = parseFloat(newEntry.amount);
    const balanceChange =
      selectedCategory === "Income" ? entryAmount : -entryAmount;

    const newCurrentBalance = currentBalance + balanceChange;

    setCurrentBalance(newCurrentBalance);

    localStorage.setItem(
      "formEntries",
      JSON.stringify([...formEntries, newEntry])
    );

    setAmount("");
    setDate(new Date().toLocaleDateString());
  };

  useEffect(() => {
    if (currentBalance) {
      localStorage.setItem("currentBalance", JSON.stringify(currentBalance));
    }
  }, [currentBalance]);

  const columnNames = [
    "Amount",
    "Date",
    "Group",
    "Category",
    "Subcategory",
    "",
  ];

  const handleDeleteEntry = (index) => {
    setEntryToDelete(index);
    setShowDeleteConfirmation(index);
  };

  const confirmDeleteEntry = () => {
    if (entryToDelete !== null) {
      const updatedEntries = [...formEntries];
      const deletedEntry = updatedEntries.splice(entryToDelete, 1)[0];
      setFormEntries(updatedEntries);

      localStorage.setItem("formEntries", JSON.stringify(updatedEntries));

      if (deletedEntry.group === "Income") {
        const newCurrentBalance =
          currentBalance - parseFloat(deletedEntry.amount);
        setCurrentBalance(newCurrentBalance);
        localStorage.setItem(
          "currentBalance",
          JSON.stringify(newCurrentBalance)
        );
      } else if (deletedEntry.group === "Expense") {
        const newCurrentBalance =
          currentBalance + parseFloat(deletedEntry.amount);
        setCurrentBalance(newCurrentBalance);
        localStorage.setItem(
          "currentBalance",
          JSON.stringify(newCurrentBalance)
        );
      }

      setEntryToDelete(null);
      setShowDeleteConfirmation(null);
    }
  };

  const cancelDeleteEntry = () => {
    setEntryToDelete(null);
    setShowDeleteConfirmation(null);
  };

  return (
    <>
      <div className="flex flex-row justify-center pb-4 text-xl font-bold text-amber-400">
        {currentBalance + " " + currency}
      </div>
      <form
        className="flex flex-col justify-center"
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          required
          type="number"
          name="Amount"
          placeholder="Enter the amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-1/2 mx-auto mb-3 text-center bg-transparent border-2 rounded h-7 border-amber-400 text-amber-400"
        ></input>
        <div className="flex flex-col self-center justify-center text-amber-400">
          <label htmlFor="myDateInput" className="self-center">
            Select a date:
          </label>
          <DatePicker
            id="myDateInput"
            name="Date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat={dateFormat}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="text-center bg-transparent border-2 rounded appearance-none h-7 border-amber-400"
          />
        </div>
        <div className="flex flex-row justify-center pb-3 border-b-2 border-dashed border-amber-400/50">
          <label>
            <input
              type="radio"
              name="mainGroup"
              value="Expense"
              checked={selectedCategory === "Expense"}
              onChange={handleMainButtonChange}
              className="appearance-none peer"
            />
            <div className="px-2 mx-1 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
              Expense
            </div>
          </label>
          <label>
            <input
              type="radio"
              name="mainGroup"
              value="Income"
              checked={selectedCategory === "Income"}
              onChange={handleMainButtonChange}
              className="appearance-none peer"
            />
            <div className="px-2 mx-1 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
              Income
            </div>
          </label>
        </div>
        <div className="flex flex-row flex-wrap justify-center pb-3 border-b-2 border-dashed border-amber-400/50">
          {parsedCategories
            .filter((button) => button.group === selectedCategory)
            .map((button, index) => (
              <div key={index}>
                <label className="flex px-2 mt-3">
                  <input
                    type="radio"
                    name="userButtons"
                    value={button.label}
                    checked={selectedGroup === button.label}
                    onChange={(e) => handleSelectedGroupChange(e, index)}
                    className="appearance-none peer"
                  />
                  <div className="px-2 mx-1 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
                    {button.label}
                  </div>
                </label>
              </div>
            ))}
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {selectedCategoryIndex !== null &&
            parsedCategories[selectedCategoryIndex] &&
            parsedCategories[selectedCategoryIndex].subgroups &&
            parsedCategories[selectedCategoryIndex].subgroups
              .filter((subgroup) => subgroup.category === selectedCategory)
              .map((subgroup, sIndex) => (
                <div key={sIndex}>
                  <label className="flex px-2 mt-3">
                    <input
                      type="radio"
                      name="subcategory"
                      value={subgroup.label}
                      className="appearance-none peer"
                    />
                    <div className="px-2 mx-1 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
                      {subgroup.label}
                    </div>
                  </label>
                </div>
              ))}
        </div>
        <button
          type="submit"
          className="py-2 mx-auto mt-5 font-bold tracking-wider text-red-700 duration-300 ease-in-out border rounded border-amber-400 sm:border-2 hover:text-amber-400 hover:bg-red-700 px-7"
        >
          Submit
        </button>
      </form>
      <div className="text-center text-amber-400">
        <h2 className="mt-3 text-bold">Latest Entries</h2>
        {formEntries.length > 0 && (
          <table className="mx-auto text-xs">
            <thead className="border border-amber-400">
              <tr className="border border-amber-400">
                {columnNames.map((columnName, index) => (
                  <th className="px-2 border-2 border-amber-400" key={index}>
                    {columnName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border border-amber-400">
              {formEntries.map((entry, index) => (
                <tr className="border border-amber-400" key={index}>
                  <td className="px-1 border border-amber-400">
                    {entry.amount + " " + currency}
                  </td>
                  <td className="px-1 border border-amber-400">
                    {new Date(entry.date).toLocaleDateString({
                      format: dateFormat,
                    })}
                  </td>
                  <td className="px-1 border border-amber-400">
                    {entry.group}
                  </td>
                  <td className="px-1 border border-amber-400">
                    {entry.category}
                  </td>
                  <td className="px-1 border border-amber-400">
                    {entry.subcategory}
                  </td>
                  <td className="px-1 bg-red-700 border border-amber-400">
                    <button
                      onClick={() => handleDeleteEntry(index)}
                      className="font-bold text-white"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {showDeleteConfirmation !== null && (
        <div className="modal">
          <div className="absolute z-50 w-3/4 p-2 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded modal-content top-1/2 left-1/2">
            <p className="pb-4">Are you sure you want to delete this entry?</p>
            <button
              onClick={confirmDeleteEntry}
              className="px-4 py-1 mx-2 text-white bg-red-700 rounded btn-delete"
            >
              Yes
            </button>
            <button
              onClick={cancelDeleteEntry}
              className="px-4 py-1 mx-2 text-white bg-green-700 rounded btn-cancel"
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}
