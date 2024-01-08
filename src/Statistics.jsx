import { useState, useEffect } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { SlArrowUp, SlArrowDown } from "react-icons/sl";


export default function Statistics() {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [formEntries, setFormEntries] = useState([]);
  const [filterGroup, setFilterGroup] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterSubcategory, setFilterSubcategory] = useState("all");
  const [dateFormat, setDateFormat] = useState("dd-MM-yyyy");
  const [currency, setCurrency] = useState("");
  const [expandedMonths, setExpandedMonths] = useState([]);

  useEffect(() => {
    const importedBalance = JSON.parse(localStorage.getItem("currentBalance"));
    if (importedBalance) {
      setCurrentBalance(importedBalance);
    }
  }, []);

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
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    setFormEntries(savedEntries);
  }, []);

  const columnNames = ["Amount", "Date", "Group", "Category", "Subcategory"];

  const createMonthTables = () => {
    const entriesByMonth = new Map();

    const monthTotals = new Map();

    const filteredEntries = formEntries.filter((entry) => {
      if (
        (filterGroup === "all" || entry.group === filterGroup) &&
        (filterCategory === "all" || entry.category === filterCategory) &&
        (filterSubcategory === "all" || entry.subcategory === filterSubcategory)
      ) {
        return true;
      }
      return false;
    });

    filteredEntries.forEach((entry) => {
      const monthYear = dayjs(entry.date, dateFormat).format("MMMM YYYY");

      if (!entriesByMonth.has(monthYear)) {
        entriesByMonth.set(monthYear, [entry]);
      } else {
        entriesByMonth.get(monthYear).push(entry);
      }
    });

    entriesByMonth.forEach((entries) => {
      entries.sort((a, b) => new Date(b.date) - new Date(a.date));
    });

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

  const toggleMonth = (month) => {
    setExpandedMonths((prevExpandedMonths) =>
      prevExpandedMonths.includes(month)
        ? prevExpandedMonths.filter((m) => m !== month)
        : [...prevExpandedMonths, month]
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center text-bold text-amber-400">
        <p className="mx-auto">Current Balance</p>
        <p className="mx-auto text-xl font-bold">
          {currentBalance.toFixed(2) + " " + currency}
        </p>
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
        {Array.from(entriesByMonth)
          .sort(
            ([monthA], [monthB]) =>
              dayjs(monthB).format(dateFormat) -
              dayjs(monthA).format(dateFormat)
          )
          .map(([month, entries]) => {
            const totalExpense = monthTotals.get(month).totalExpense;
            const totalIncome = monthTotals.get(month).totalIncome;

            const isIncomeHigher = totalIncome > totalExpense;
            const isExpenseHigher = totalExpense > totalIncome;

            entries.sort(
              (a, b) => dayjs(b.date, dateFormat) - dayjs(a.date, dateFormat)
            );

            function changeSpecificPartsToLowerCase(
              inputFormat,
              partsToChange
            ) {
              const formatParts = inputFormat.split(/([^a-zA-Z]+)/);

              for (let i = 0; i < formatParts.length; i += 2) {
                if (partsToChange.includes(formatParts[i])) {
                  formatParts[i] = formatParts[i].toLowerCase();
                }
              }

              const result = formatParts.join("");
              return result;
            }

            const originalFormat = dateFormat;
            const partsToChange = ["DD", "YYYY"];

            const modifiedFormat = changeSpecificPartsToLowerCase(
              originalFormat,
              partsToChange
            );
            console.log(`Original Format: ${originalFormat}`);
            console.log(`Modified Format: ${modifiedFormat}`);
            return (
              <div key={month}>
                <h3 className="mt-4 text-bold">
                  <button
                    onClick={() => toggleMonth(month)}
                    className="flex flex-row justify-center w-full px-3 py-1 mb-2 text-xl text-amber-400"
                  >
                    {month}
                    {expandedMonths.includes(month) ? (
                      <SlArrowDown className="pt-2 pl-2" />
                    ) : (
                      <SlArrowUp className="pt-2 pl-2" />
                    )}
                  </button>
                </h3>
                {expandedMonths.includes(month) && (
                  <>
                    <p>
                      Total Monthly Expense:{" "}
                      <span className={isExpenseHigher ? "text-red-500" : ""}>
                        {totalExpense.toFixed(2) + " " + currency}
                      </span>
                    </p>
                    <p>
                      Total Monthly Income:{" "}
                      <span className={isIncomeHigher ? "text-green-500" : ""}>
                        {totalIncome.toFixed(2) + " " + currency}
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
                                {entry.amount + " " + currency}
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
                  </>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}
