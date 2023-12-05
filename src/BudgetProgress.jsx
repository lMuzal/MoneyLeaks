import { useState, useEffect } from "react";

export default function BudgetProgress() {
  const [completion, setCompletion] = useState(0);
  const [formEntries, setFormEntries] = useState([]);
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    const currency = JSON.parse(localStorage.getItem("currency"));
    if (currency) {
      setCurrency(currency);
    }
  }, [currency]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    setFormEntries(savedEntries);
  }, []);

//   useEffect(() => {
//     const totalExpense = formEntries
//       .filter((entry) => entry.group === "Expense")
//       .reduce((sum, entry) => sum + parseFloat(entry.amount), 0);
//   }, [formEntries]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (completion < 100) {
        setCompletion(completion + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [completion]);

  const getProgressBarColor = () => {
    if (completion < 71) {
      return "bg-green-500";
    } else if (completion < 86) {
      return "bg-yellow-500";
    } else if (completion < 99) {
      return "bg-red-500";
    } else {
      return "bg-red-800";
    }
  };

  return (
    <div className="w-full p-4">
      <h2 className="mb-2 text-2xl font-bold text-center text-amber-400">
        Category Name
      </h2>
      <h2 className="mb-2 text-xl font-bold text-center text-amber-400">
        {/* {formEntries.map((entry, index) => ( */}
        {/* //   <div key={index}>{entry.amount + " " + currency}</div> */}
        {/* ))} */}
        <div>
          {formEntries
            .filter((entry) => entry.group === "Expense")
            .reduce((sum, entry) => sum + parseFloat(entry.amount), 0)}{" " + currency}
        </div>
      </h2>
      <div className="flex items-center">
        <div className="relative w-full h-6 bg-gray-300 rounded-full">
          <p className="absolute mx-auto text-sm font-bold text-center -translate-x-1/2 translate-y-px left-1/2">{`${completion}%`}</p>
          <div
            className={`h-full ${getProgressBarColor()} rounded-full transition-all`}
            style={{ width: `${completion}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
