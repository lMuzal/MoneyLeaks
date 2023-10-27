import { useState, useEffect } from "react";

export default function Statistics() {
  const [currentBalance, setCurrentBalance] = useState(null);
  const [formEntries, setFormEntries] = useState([]);

  useEffect(() => {
    const importedBalance = JSON.parse(localStorage.getItem("currentBalance"));
    if (importedBalance) {
      setCurrentBalance(importedBalance);
    }
  }, []);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    setFormEntries(savedEntries);
  }, []);

  const columnNames = ["Amount", "Date", "Group", "Category", "Subcategory"];

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
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
