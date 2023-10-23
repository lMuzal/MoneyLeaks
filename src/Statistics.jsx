import { useState, useEffect } from "react";

export default function Statistics() {
  const [initialBalance, setInitialBalance] = useState(null);
  const [formEntries, setFormEntries] = useState([]);

  useEffect(() => {
    const startingBalance = JSON.parse(localStorage.getItem("initialBalance"));
    if (startingBalance) {
      setInitialBalance(startingBalance);
    }
  }, []);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    setFormEntries(savedEntries);
  }, []);

  // Calculate total income and total expense
  const totalIncome = formEntries
    .filter((entry) => entry.group === "Income")
    .reduce((total, entry) => total + parseFloat(entry.amount), 0);

  const totalExpense = formEntries
    .filter((entry) => entry.group === "Expense")
    .reduce((total, entry) => total + parseFloat(entry.amount), 0);

  // Calculate the remaining balance
  const currentBalance =
    parseFloat(initialBalance) + totalIncome - totalExpense;

    useEffect(() => {
      if (currentBalance)
        localStorage.setItem("currentBalance", JSON.stringify(currentBalance));
    }, [currentBalance]);

  return (
    <div className="flex flex-row justify-center text-bold text-amber-400">
      <p>Initial Balance: {initialBalance}</p>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expense: {totalExpense}</p>
      <p>Current Balance: {currentBalance}</p>
    </div>
  );
}
