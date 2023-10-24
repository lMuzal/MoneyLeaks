import { useState, useEffect } from "react";

export default function Statistics() {
  const [currentBalance, setCurrentBalance] = useState(null);
  const [formEntries, setFormEntries] = useState([]);
  const [entryToDelete, setEntryToDelete] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(null);

  useEffect(() => {
    const importedBalance = JSON.parse(localStorage.getItem("actualBalance"));
    if (importedBalance) {
      setCurrentBalance(importedBalance);
    }
  }, []);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    setFormEntries(savedEntries);
  }, []);

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
          (prevBalance) => prevBalance - parseFloat(deletedEntry.amount).toFixed(2)
        );
      } else if (deletedEntry.group === "Expense") {
        setCurrentBalance(
          (prevBalance) => prevBalance + parseFloat(deletedEntry.amount).toFixed(2)
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
      <div className="flex flex-col justify-center text-bold text-amber-400">
        <p className="mx-auto">Current Balance</p>
        <p className="mx-auto text-xl font-bold">{currentBalance}</p>
      </div>
      <div className="text-center text-amber-400">
        <h2 className="mt-3 text-bold">Entries</h2>
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
