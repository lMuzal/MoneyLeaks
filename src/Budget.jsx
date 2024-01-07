/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import BudgetProgress from "./BudgetProgress";

export default function BudgetList() {
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [historicalData, setHistoricalData] = useState([]);
  const [currency, setCurrency] = useState("");
  const [budgetCategories, setBudgetCategories] = useState([]);

  useEffect(() => {
    const currency = JSON.parse(localStorage.getItem("currency"));
    if (currency) {
      setCurrency(currency);
    }

    const savedBudgetCategories = JSON.parse(
      localStorage.getItem("budgetCategories")
    );
    if (savedBudgetCategories) {
      setBudgetCategories(savedBudgetCategories);
    }
  }, []);

  useEffect(() => {
    const newMonth = dayjs().month();
    const newYear = dayjs().year();

    if (newMonth !== currentMonth || newYear !== currentYear) {
      const historicalEntry = {
        year: currentYear,
        month: currentMonth,
        data: budgetCategories.map((category) => ({
          categoryName: category.category,
          plannedAmount: category.value,
        })),
      };

      setHistoricalData((prevData) => [...prevData, historicalEntry]);

      setCurrentMonth(newMonth);
      setCurrentYear(newYear);
    }
  }, [currentMonth, currentYear, budgetCategories]);

  return (
    <div>
      {budgetCategories.length > 0 ? (
        budgetCategories.map((category) => (
          <BudgetProgress
            key={category.category}
            categoryName={category.category}
            plannedAmount={category.value}
          />
        ))
      ) : (
        <h1 className="w-3/4 mx-auto text-3xl font-bold tracking-wider text-center text-amber-400">
          No budget categories available.<br></br>Go to Account settings {`${'=>'}`} budget setup and start planning
        </h1>
      )}

      {historicalData.map((historicalEntry) => (
        <div key={`${historicalEntry.year}-${historicalEntry.month}`}>
          <h2 className="mt-4 text-xl font-bold">
            {`${historicalEntry.year}-${historicalEntry.month + 1}`}
          </h2>
          {historicalEntry.data.map((entry) => (
            <div key={entry.categoryName} className="ml-4">
              <span>{entry.categoryName}:</span>
              <span className="ml-2">{`${entry.plannedAmount} ${currency}`}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
