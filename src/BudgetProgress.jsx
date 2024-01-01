/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function BudgetProgress(props) {
  const [formEntries, setFormEntries] = useState([]);
  const [currency, setCurrency] = useState("");
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const plannedAmount = props.plannedAmount;
  const categoryName = props.categoryName;

  useEffect(() => {
    const currency = JSON.parse(localStorage.getItem("currency"));
    if (currency) {
      setCurrency(currency);
    }
  }, []);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    setFormEntries(savedEntries);
  }, []);

  useEffect(() => {
    const currentMonth = new Date().getMonth(); 

    const calculatedEntries = formEntries
      .filter((entry) => entry.group === "Expense")
      .filter((entry) => entry.category === categoryName)
      .filter((entry) => {
        const entryDate = new Date(entry.date);
        return entryDate.getMonth() === currentMonth;
      })
      .reduce((sum, entry) => sum + parseFloat(entry.amount), 0);
    setCalculatedAmount(calculatedEntries);
  }, [formEntries, categoryName]);

  const percentage = parseFloat(
    (calculatedAmount / plannedAmount) * 100
  ).toFixed(1);

  const getProgressBarColor = () => {
    if (percentage < 71) {
      return "bg-green-500";
    } else if (percentage < 86) {
      return "bg-yellow-500";
    } else if (percentage < 99) {
      return "bg-red-500";
    } else {
      return "animate-pulse bg-red-800";
    }
  };

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-xl font-bold text-center text-amber-400">
        {categoryName}
      </h2>
      <h2 className="text-lg font-bold text-center text-amber-400">
        <div>
          {calculatedAmount.toFixed(2) + " " + currency} / {plannedAmount + " " + currency}
        </div>
      </h2>
      <div className="flex items-center">
        <div className="relative w-full h-6 bg-gray-300 rounded-full">
          <p className="absolute z-10 mx-auto text-sm font-bold text-center -translate-x-1/2 translate-y-px left-1/2">{`${percentage}%`}</p>
          <div
            className={`h-full ${getProgressBarColor()} rounded-full transition-all max-w-full z-0`}
            style={{ width: `${percentage}%`}}
          ></div>
        </div>
      </div>
    </div>
  );
}
