/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

export default function MainSection() {
  const currentDate = dayjs();
  const [selectedGroup, setSelectedGroup] = useState("Expense");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [formEntries, setFormEntries] = useState([]);
  const [initialBalance, setInitialBalance] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [entryToDelete, setEntryToDelete] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(null);
  const [parsedCategories, setParsedCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateFormat, setDateFormat] = useState("dd-MM-yyyy");
  const [currency, setCurrency] = useState("");
  const [expandedMonths, setExpandedMonths] = useState([]);
  const [expandedYears, setExpandedYears] = useState([]);

  useEffect(() => {
    const dateFormat = JSON.parse(localStorage.getItem("dateFormat"));
    if (dateFormat) {
      setDateFormat(dateFormat);
    }
  }, [dateFormat]);

  const formattedCurrentDate = currentDate.format(dateFormat);

  console.log(formattedCurrentDate);

  useEffect(() => {
    const currency = JSON.parse(localStorage.getItem("currency"));
    if (currency) {
      setCurrency(currency);
    }
  }, [currency]);

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
        date: formattedCurrentDate,
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
  }, [dateFormat, formattedCurrentDate]);

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

  function changeSpecificPartsToLowerCase(inputFormat, partsToChange) {
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

  const displayBalanceText = () => {
    if (currentBalance === null || currentBalance === 0) {
      return "There's nothing to see here. Go to settings and set up Initial Balance";
    } else {
      return `${currentBalance.toFixed(2)} ${currency}`;
    }
  };

  const currentMonthYear = dayjs().format("MMMM YYYY");
  if (!expandedMonths.includes(currentMonthYear)) {
    setExpandedMonths([currentMonthYear, ...expandedMonths]);
  }

  const groupedEntries = formEntries.reduce((acc, entry) => {
    const monthYear = dayjs(entry.date, dateFormat).format("MMMM YYYY");
    const year = dayjs(entry.date, dateFormat).format("YYYY");
    acc[year] = acc[year] || {};
    acc[year][monthYear] = acc[year][monthYear] || [];
    acc[year][monthYear].push(entry);
    return acc;
  }, {});

  const sortedAndGroupedEntries = Object.entries(groupedEntries)
    .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
    .map(([year, months]) => ({
      year,
      months: Object.entries(months)
        .sort(([monthA], [monthB]) => {
          const dateA = dayjs(monthA, "MMMM YYYY");
          const dateB = dayjs(monthB, "MMMM YYYY");
          return dateB.diff(dateA);
        })
        .map(([monthYear, entries]) => ({
          monthYear,
          entries: entries.sort(
            (a, b) => dayjs(b.date, dateFormat) - dayjs(a.date, dateFormat)
          ),
        })),
    }));

  useEffect(() => {
    const currentYear = dayjs().format("YYYY");
    if (!expandedYears[currentYear]) {
      setExpandedYears((prevExpandedYears) => ({
        ...prevExpandedYears,
        [currentYear]: true,
      }));
    }
  }, []);

  const toggleMonth = (year, monthYear) => {
    setExpandedMonths((prevExpandedMonths) => {
      const key = `${year}-${monthYear}`;
      return prevExpandedMonths.includes(key)
        ? prevExpandedMonths.filter((month) => month !== key)
        : [...prevExpandedMonths, key];
    });
  };

  const toggleYear = (year) => {
    setExpandedYears((prevExpandedYears) => ({
      ...prevExpandedYears,
      [year]: !prevExpandedYears[year],
    }));
  };

  useEffect(() => {
    const currentMonthYear = dayjs().format("MMMM YYYY");
    const defaultExpandedMonth = `${dayjs().format(
      "YYYY"
    )}-${currentMonthYear}`;

    if (!expandedMonths.includes(defaultExpandedMonth)) {
      setExpandedMonths([defaultExpandedMonth, ...expandedMonths]);
    }
  }, []);

  return (
    <>
      <div className="flex justify-center pb-4 text-xl font-bold text-center text-amber-400">
        {displayBalanceText()}
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
            dateFormat={modifiedFormat}
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
        <h2 className="mt-3 text-bold">Entries</h2>
        {sortedAndGroupedEntries.map(({ year, months }, yearIndex) => (
          <div key={yearIndex} className="mb-4">
            <button
              className="flex flex-row justify-center w-full px-3 py-1 mb-2 text-xl text-amber-400"
              onClick={() => toggleYear(year)}
            >
              {year}{" "}
              {expandedYears[year] ? (
                <SlArrowDown className="pt-2 pl-2" />
              ) : (
                <SlArrowUp className="pt-2 pl-2" />
              )}
            </button>

            {expandedYears[year] &&
              months.map(({ monthYear, entries }, monthIndex) => (
                <div key={monthIndex} className="mb-4">
                  <button
                    className="flex flex-row justify-center w-full px-3 py-1 mb-2 text-xl text-amber-400"
                    onClick={() => toggleMonth(year, monthYear)}
                  >
                    {monthYear}{" "}
                    {expandedMonths.includes(`${year}-${monthYear}`) ? (
                      <SlArrowDown className="pt-2 pl-2" />
                    ) : (
                      <SlArrowUp className="pt-2 pl-2" />
                    )}
                  </button>
                  {expandedMonths.includes(`${year}-${monthYear}`) && (
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
                        {entries.map((entry, entryIndex) => (
                          <tr
                            className="border border-amber-400"
                            key={entryIndex}
                          >
                            <td className="px-1 border border-amber- -400">
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
                            <td className="px-1 bg-red-700 border border-amber-400">
                              <button
                                onClick={() => handleDeleteEntry(entryIndex)}
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
              ))}
          </div>
        ))}
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
