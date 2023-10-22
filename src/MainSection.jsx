/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function MainSection() {
  const [selectedGroup, setSelectedGroup] = useState("expense");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [selectedButton, setSelectedButton] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());

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
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  return (
    <div>
      <form
        className="flex flex-col justify-center"
        method="post"
        onSubmit={handleSubmit}
      >
          <input
            required
            type="number"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-1/2 mx-auto mb-3 text-center bg-transparent border-2 rounded h-7 border-amber-400 text-amber-400"
          ></input>
          <input
            required
            type="date"
            value={date}
            placeholder="Enter the date"
            onChange={setDate}
            className="w-1/2 mx-auto text-center bg-transparent border-2 rounded h-7 border-amber-400 text-amber-400"
          ></input>
        <div className="flex flex-row justify-center pb-3 border-b-2 border-dashed border-amber-400/50">
          <label>
            <input
              type="radio"
              name="group"
              value="expense"
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
              name="group"
              value="income"
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
    </div>
  );
}
