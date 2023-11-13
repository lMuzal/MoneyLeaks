/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

export default function MainSection() {
  const [selectedGroup, setSelectedGroup] = useState("Expense");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [selectedButton, setSelectedButton] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [formEntries, setFormEntries] = useState([]);
  const [initialBalance, setInitialBalance] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [entryToDelete, setEntryToDelete] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];

    // Check if formEntries is empty
    if (savedEntries.length === 0) {
      const initialEntry = {
        amount: "100", // Set your default amount
        date: new Date().toLocaleDateString(),
        group: "Expense", // Set your default group
        userButtons: "DefaultButton", // Set your default button
        subgroupButtons: "DefaultSubgroup", // Set your default subgroup
      };

      // Set the initial value for formEntries
      savedEntries.push(initialEntry);

      // Update localStorage with the initial value
      localStorage.setItem("formEntries", JSON.stringify(savedEntries));
    }

    // Set formEntries state
    setFormEntries(savedEntries);
  }, []);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    setFormEntries(savedEntries);
  }, []);

  useEffect(() => {
    const initialBalance = JSON.parse(localStorage.getItem("initialBalance"));
    setInitialBalance(initialBalance);
  }, []);
  
  useEffect(() => {
    if (initialBalance) {
      setCurrentBalance(initialBalance);
    }
  }, [initialBalance]);

  useEffect(() => {
    setCurrentBalance(initialBalance);
  }, [initialBalance]);

  useEffect(() => {
    const calculatedBalance = JSON.parse(
      localStorage.getItem("currentBalance")
    );
    if (calculatedBalance !== null) {
      setCurrentBalance(
        calculatedBalance
      );
    }
  }, [initialBalance]);
  
  useEffect(() => {
    if (formEntries.length == 0) {
      setCurrentBalance(initialBalance);
    }
  }, [formEntries, initialBalance]);

  useEffect(() => {
    if (currentBalance)
      localStorage.setItem("currentBalance", JSON.stringify(currentBalance));
  }, [currentBalance]);

   useEffect(() => {
     const totalExpense = formEntries
       .filter((entry) => entry.group === "Expense")
       .reduce((sum, entry) => sum + parseFloat(entry.amount), 0);

     const totalIncome = formEntries
       .filter((entry) => entry.group === "Income")
       .reduce((sum, entry) => sum + parseFloat(entry.amount), 0);

     localStorage.setItem("totalExpense", JSON.stringify(totalExpense));
     localStorage.setItem("totalIncome", JSON.stringify(totalIncome));
   }, [formEntries]);


  const handleMainButtonChange = (e) => {
    setSelectedGroup(e.target.value);
    setSelectedButton("");
  };

  const handleSelectedButtonChange = (e, index) => {
    setSelectedButton(e.target.value);
    setSelectedButtonIndex(
      parsedButtons.findIndex((button) => button.label === e.target.value)
    );
  };

  const savedButtons = localStorage.getItem("buttons");
  const parsedButtons = JSON.parse(savedButtons);

  console.log(parsedButtons);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newEntry = {
      amount: formData.get("Amount"),
      date: formData.get("Date"),
      group: selectedGroup,
      userButtons: selectedButton,
      subgroupButtons: formData.get("subgroupButtons"),
    };

    setFormEntries([...formEntries, newEntry]);

    const entryAmount = parseFloat(newEntry.amount);
    const balanceChange =
      selectedGroup === "Income" ? entryAmount : -entryAmount;

    setCurrentBalance(parseFloat(currentBalance) + parseFloat(balanceChange));

    localStorage.setItem(
      "formEntries",
      JSON.stringify([...formEntries, newEntry])
    );

    setAmount("");
    setDate(new Date().toLocaleDateString());
  };

  console.log(formEntries);

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
        setCurrentBalance(
          parseFloat(currentBalance) - parseFloat(deletedEntry.amount)
        );
      } else if (deletedEntry.group === "Expense") {
        setCurrentBalance(
          parseFloat(currentBalance) + parseFloat(deletedEntry.amount)
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
        {currentBalance}
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
        <input
          required
          type="date"
          name="Date"
          value={date}
          placeholder="Enter the date"
          onChange={(e) => setDate(e.target.value)}
          className="w-1/2 mx-auto text-center bg-transparent border-2 rounded h-7 border-amber-400 text-amber-400"
        ></input>
        <div className="flex flex-row justify-center pb-3 border-b-2 border-dashed border-amber-400/50">
          <label>
            <input
              type="radio"
              name="mainGroup"
              value="Expense"
              checked={selectedGroup === "Expense"}
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
              checked={selectedGroup === "Income"}
              onChange={handleMainButtonChange}
              className="appearance-none peer"
            />
            <div className="px-2 mx-1 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
              Income
            </div>
          </label>
        </div>
        <div className="flex flex-row flex-wrap justify-center pb-3 border-b-2 border-dashed border-amber-400/50">
          {parsedButtons
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
                  <div className="px-2 mx-1 font-bold duration-300 ease-in-out border rounded text-amber-400 border-amber-400 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">
                    {button.label}
                  </div>
                </label>
              </div>
            ))}
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {selectedButtonIndex !== null &&
            parsedButtons[selectedButtonIndex].subgroups
              .filter((subgroup) => subgroup.group === selectedGroup)
              .map((subgroup, sIndex) => (
                <div key={sIndex}>
                  <label className="flex px-2 mt-3">
                    <input
                      type="radio"
                      name="subgroupButtons"
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
                    {entry.amount}
                  </td>
                  <td className="px-1 border border-amber-400">{entry.date}</td>
                  <td className="px-1 border border-amber-400">
                    {entry.group}
                  </td>
                  <td className="px-1 border border-amber-400">
                    {entry.userButtons}
                  </td>
                  <td className="px-1 border border-amber-400">
                    {entry.subgroupButtons}
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
