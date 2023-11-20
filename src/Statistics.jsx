import { useState, useEffect } from "react";
import SunburstChart from "./SunburstChart";

export default function Statistics() {
  const [currentBalance, setCurrentBalance] = useState(null);
  const [formEntries, setFormEntries] = useState([]);
  //   const [currentMonth] = useState(new Date().getMonth());
  const [filterGroup, setFilterGroup] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterSubcategory, setFilterSubcategory] = useState("all");

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

  const createMonthTables = () => {
    const entriesByMonth = new Map();

    const monthTotals = new Map(); // To store the total income and expense for each month

    const filteredEntries = formEntries.filter((entry) => {
      if (
        (filterGroup === "all" || entry.group === filterGroup) &&
        (filterCategory === "all" || entry.category === filterCategory) &&
        (filterSubcategory === "all" ||
          entry.subcategory === filterSubcategory)
      ) {
        return true;
      }
      return false;
    });

    filteredEntries.forEach((entry) => {
      const date = new Date(entry.date);
      const monthYear = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

      if (!entriesByMonth.has(monthYear)) {
        entriesByMonth.set(monthYear, [entry]);
      } else {
        entriesByMonth.get(monthYear).push(entry);
      }
    });

    entriesByMonth.forEach((entries) => {
      entries.sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    // Calculate total income and expense for each month
    entriesByMonth.forEach((entries, month) => {
      const totalExpense = entries
        .filter((entry) => entry.group === "Expense")
        .reduce((total, entry) => total + parseFloat(entry.amount), 0);

      const totalIncome = entries
        .filter((entry) => entry.group === "Income")
        .reduce((total, entry) => total + parseFloat(entry.amount), 0);

      monthTotals.set(month, { totalExpense, totalIncome });
    });

    return { entriesByMonth, monthTotals };
  };

  const { entriesByMonth, monthTotals } = createMonthTables();

  return (
    <>
      <div className="flex flex-col justify-center text-bold text-amber-400">
        <p className="mx-auto">Current Balance</p>
        <p className="mx-auto text-xl font-bold">{currentBalance}</p>
      </div>
      <div className="flex justify-center w-full pt-8">
        <SunburstChart />
      </div>
      <div className="text-center text-amber-400">
        <h2 className="mt-3 text-bold">Entries</h2>

        <div className="flex justify-center mx-auto mb-3">
          <div className="filter-dropdown">
            <select
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value)}
            >
              <option value="all">All Groups</option>
              <option value="Expense">Expense</option>
              <option value="Income">Income</option>
            </select>
          </div>

          {filterGroup !== "all" && (
            <div className="filter-dropdown">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {Array.from(
                  new Set(
                    formEntries
                      .filter((entry) => entry.group === filterGroup)
                      .map((entry) => entry.category)
                  )
                ).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          )}

          {filterCategory !== "all" && (
            <div className="filter-dropdown">
              <select
                value={filterSubcategory}
                onChange={(e) => setFilterSubcategory(e.target.value)}
              >
                <option value="all">All Subcategories</option>
                {Array.from(
                  new Set(
                    formEntries
                      .filter(
                        (entry) =>
                          entry.group === filterGroup &&
                          entry.category === filterCategory
                      )
                      .map((entry) => entry.subcategory)
                  )
                ).map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {Array.from(entriesByMonth).map(([month, entries]) => {
          const totalExpense = monthTotals.get(month).totalExpense;
          const totalIncome = monthTotals.get(month).totalIncome;

          const isIncomeHigher = totalIncome > totalExpense;
          const isExpenseHigher = totalExpense > totalIncome;

          return (
            <div key={month}>
              <h3 className="mt-4 text-bold">{month}</h3>
              <p>
                Total Monthly Expense:{" "}
                <span className={isExpenseHigher ? "text-red-500" : ""}>
                  {totalExpense}
                </span>
              </p>
              <p>
                Total Monthly Income:{" "}
                <span className={isIncomeHigher ? "text-green-500" : ""}>
                  {totalIncome}
                </span>
              </p>
              {entries.length > 0 && (
                <table className="mx-auto text-xs">
                  <thead className="border border-amber-400">
                    <tr className="border border-amber-400">
                      {columnNames.map((columnName, index) => (
                        <th
                          className="px-2 border-2 border-amber-400"
                          key={index}
                        >
                          {columnName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="border border-amber-400">
                    {entries.map((entry, index) => (
                      <tr className="border border-amber-400" key={index}>
                        <td className="px-1 border border-amber-400">
                          {entry.amount}
                        </td>
                        <td className="px-1 border border-amber-400">
                          {entry.date}
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
