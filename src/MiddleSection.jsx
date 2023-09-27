import { useState } from "react";
import TileButton from "./TileButton";

export default function MiddleSection() {
  const [data, setData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [expenseClick, setExpenseClick] = useState(false);
  const [expenseClickValue, setExpenseClickValue] = useState(null);
  const [incomeClick, setIncomeClick] = useState(false);
  const [incomeClickValue, setIncomeClickValue] = useState(null);
  const [secondaryExpenseClickAutomobile, setSecondaryExpenseClickAutomobile] =
    useState(false);
  const [
    secondaryExpenseClickAutomobileValue,
    setSecondaryExpenseClickAutomobileValue,
  ] = useState(null);
  const [secondaryExpenseClickBills, setSecondaryExpenseClickBills] =
    useState(false);
  const [secondaryExpenseClickBillsValue, setSecondaryExpenseClickBillsValue] =
    useState(null);
  const [secondaryExpenseClickChildren, setSecondaryExpenseClickChildren] =
    useState(false);
  const [
    secondaryExpenseClickChildrenValue,
    setSecondaryExpenseClickChildrenValue,
  ] = useState(null);
  const [secondaryExpenseClickClothing, setSecondaryExpenseClickClothing] =
    useState(false);
  const [
    secondaryExpenseClickClothingValue,
    setSecondaryExpenseClickClothingValue,
  ] = useState(null);
  const [secondaryExpenseClickFood, setSecondaryExpenseClickFood] =
    useState(false);
  const [secondaryExpenseClickFoodValue, setSecondaryExpenseClickFoodValue] =
    useState(null);
  const [
    secondaryExpenseClickEntertainment,
    setSecondaryExpenseClickEntertainment,
  ] = useState(false);
  const [
    secondaryExpenseClickEntertainmentValue,
    setSecondaryExpenseClickEntertainmentValue,
  ] = useState(null);
  const [secondaryExpenseClickGifts, setSecondaryExpenseClickGifts] =
    useState(false);
  const [secondaryExpenseClickGiftsValue, setSecondaryExpenseClickGiftsValue] =
    useState(null);
  const [secondaryExpenseClickHealthcare, setSecondaryExpenseClickHealthcare] =
    useState(false);
  const [
    secondaryExpenseClickHealthcareValue,
    setSecondaryExpenseClickHealthcareValue,
  ] = useState(null);
  const [secondaryExpenseClickHousehold, setSecondaryExpenseClickHousehold] =
    useState(false);
  const [
    secondaryExpenseClickHouseholdValue,
    setSecondaryExpenseClickHouseholdValue,
  ] = useState(null);
  const [secondaryExpenseClickJobExpense, setSecondaryExpenseClickJobExpense] =
    useState(false);
  const [
    secondaryExpenseClickJobExpenseValue,
    setSecondaryExpenseClickJobExpenseValue,
  ] = useState(null);
  const [secondaryExpenseClickPets, setSecondaryExpenseClickPets] =
    useState(false);
  const [secondaryExpenseClickPetsValue, setSecondaryExpenseClickPetsValue] =
    useState(null);
  const [secondaryExpenseClickOther, setSecondaryExpenseClickOther] =
    useState(false);
  const [secondaryExpenseClickOtherValue, setSecondaryExpenseClickOtherValue] =
    useState(null);

  const expenseButtonClick = () => {
    setExpenseClick(!expenseClick);
    if (!expenseClick) {
      setExpenseClickValue("Expense");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const incomeButtonClick = () => {
    setIncomeClick(!incomeClick);
    if (!incomeClick) {
      setIncomeClickValue("Income");
      setExpenseClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickAutomobile = () => {
    setSecondaryExpenseClickAutomobile(!secondaryExpenseClickAutomobile);
    if (!secondaryExpenseClickAutomobile) {
      setSecondaryExpenseClickAutomobileValue("Automobile");
      setIncomeClick(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickBills = () => {
    setSecondaryExpenseClickBills(!secondaryExpenseClickBills);
    if (!secondaryExpenseClickBills) {
      setSecondaryExpenseClickBillsValue("Bills");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickChildren = () => {
    setSecondaryExpenseClickChildren(!secondaryExpenseClickChildren);
    if (!secondaryExpenseClickChildren) {
      setSecondaryExpenseClickChildrenValue("Children");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickClothing = () => {
    setSecondaryExpenseClickClothing(!secondaryExpenseClickClothing);
    if (!secondaryExpenseClickClothing) {
      setSecondaryExpenseClickClothingValue("Clothing");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickEntertainment = () => {
    setSecondaryExpenseClickEntertainment(!secondaryExpenseClickEntertainment);
    if (!secondaryExpenseClickEntertainment) {
      setSecondaryExpenseClickEntertainmentValue("Entertainment");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickFood = () => {
    setSecondaryExpenseClickFood(!secondaryExpenseClickFood);
    if (!secondaryExpenseClickFood) {
      setSecondaryExpenseClickFoodValue("Food");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickGifts = () => {
    setSecondaryExpenseClickGifts(!secondaryExpenseClickGifts);
    if (!secondaryExpenseClickGifts) {
      setSecondaryExpenseClickGiftsValue("Gifts");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickHealthcare = () => {
    setSecondaryExpenseClickHealthcare(!secondaryExpenseClickHealthcare);
    if (!secondaryExpenseClickHealthcare) {
      setSecondaryExpenseClickHealthcareValue("Healthcare");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickHousehold = () => {
    setSecondaryExpenseClickHousehold(!secondaryExpenseClickHousehold);
    if (!secondaryExpenseClickHousehold) {
      setSecondaryExpenseClickHouseholdValue("Household");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickJobExpense = () => {
    setSecondaryExpenseClickJobExpense(!secondaryExpenseClickJobExpense);
    if (!secondaryExpenseClickJobExpense) {
      setSecondaryExpenseClickJobExpenseValue("Job Expense");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickPets(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickPets = () => {
    setSecondaryExpenseClickPets(!secondaryExpenseClickPets);
    if (!secondaryExpenseClickPets) {
      setSecondaryExpenseClickPetsValue("Pets");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickOther(false);
    }
  };

  const secondaryExpenseButtonClickOther = () => {
    setSecondaryExpenseClickOther(!secondaryExpenseClickOther);
    if (!secondaryExpenseClickOther) {
      setSecondaryExpenseClickOtherValue("Other");
      setIncomeClick(false);
      setSecondaryExpenseClickAutomobile(false);
      setSecondaryExpenseClickBills(false);
      setSecondaryExpenseClickChildren(false);
      setSecondaryExpenseClickClothing(false);
      setSecondaryExpenseClickEntertainment(false);
      setSecondaryExpenseClickFood(false);
      setSecondaryExpenseClickGifts(false);
      setSecondaryExpenseClickHealthcare(false);
      setSecondaryExpenseClickHousehold(false);
      setSecondaryExpenseClickJobExpense(false);
      setSecondaryExpenseClickPets(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: date.target.value,
      amount,
      expenseClickValue,
      incomeClickValue,
      secondaryExpenseClickAutomobileValue,
      secondaryExpenseClickBillsValue,
      secondaryExpenseClickChildrenValue,
      secondaryExpenseClickClothingValue,
      secondaryExpenseClickEntertainmentValue,
      secondaryExpenseClickFoodValue,
      secondaryExpenseClickGiftsValue,
      secondaryExpenseClickHealthcareValue,
      secondaryExpenseClickHouseholdValue,
      secondaryExpenseClickJobExpenseValue,
      secondaryExpenseClickPetsValue,
      secondaryExpenseClickOtherValue,
    };

    setData(formData);
    setDataToDisplay(Object.values(data));
    console.log(dataToDisplay);
  };

  return (
    <>
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
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
          defaultValue={date}
          placeholder="Enter the date"
          onChange={setDate}
          className="w-1/2 mx-auto text-center bg-transparent border-2 rounded h-7 border-amber-400 text-amber-400"
        ></input>
        <div className="flex justify-center my-2">
          <TileButton
            buttonName="Expense"
            category="primary"
            onClick={expenseButtonClick}
          ></TileButton>
          <TileButton
            buttonName="Income"
            category="primary"
            onClick={incomeButtonClick}
          ></TileButton>
        </div>
        {expenseClick ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Automobile"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickAutomobile}
            ></TileButton>
            <TileButton
              buttonName="Bills"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickBills}
            ></TileButton>
            <TileButton
              buttonName="Children"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickChildren}
            ></TileButton>
            <TileButton
              buttonName="Clothing"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickClothing}
            ></TileButton>
            <TileButton
              buttonName="Entertainment"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickEntertainment}
            ></TileButton>
            <TileButton
              buttonName="Food"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickFood}
            ></TileButton>
            <TileButton
              buttonName="Gifts"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickGifts}
            ></TileButton>
            <TileButton
              buttonName="Helathcare"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickHealthcare}
            ></TileButton>
            <TileButton
              buttonName="Household"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickHousehold}
            ></TileButton>
            <TileButton
              buttonName="Job Expense"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickJobExpense}
            ></TileButton>
            <TileButton
              buttonName="Pets"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickPets}
            ></TileButton>
            <TileButton
              buttonName="Other"
              category="primaryExpense"
              onClick={secondaryExpenseButtonClickOther}
            ></TileButton>
          </div>
        ) : null}
        {incomeClick ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Salary"
              category="primaryIncome"
            ></TileButton>
            <TileButton buttonName="Bank" category="primaryIncome"></TileButton>
            <TileButton
              buttonName="Investment Income"
              category="primaryIncome"
            ></TileButton>
            <TileButton
              buttonName="Other"
              category="primaryIncome"
            ></TileButton>
          </div>
        ) : null}
        {secondaryExpenseClickAutomobile ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Gasoline"
              category="secondaryExpenseGroceries"
            ></TileButton>
            <TileButton
              buttonName="Insurance"
              category="secondaryExpenseGroceries"
            ></TileButton>
            <TileButton
              buttonName="Maintenance"
              category="secondaryExpenseGroceries"
            ></TileButton>
            <TileButton
              buttonName="Other"
              category="secondaryExpenseGroceries"
            ></TileButton>
          </div>
        ) : null}

        {secondaryExpenseClickBills ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Electricity"
              category="secondaryExpenseGroceries"
            ></TileButton>
            <TileButton
              buttonName="Water & Sewer"
              category="secondaryExpenseGroceries"
            ></TileButton>
            <TileButton
              buttonName="Rent"
              category="secondaryExpenseGroceries"
            ></TileButton>
            <TileButton
              buttonName="Phone"
              category="secondaryExpenseGroceries"
            ></TileButton>
            <TileButton
              buttonName="Taxes"
              category="secondaryExpenseGroceries"
            ></TileButton>
          </div>
        ) : null}
        {secondaryExpenseClickChildren ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Children"
              category="secondaryExpenseGroceries"
            ></TileButton>
          </div>
        ) : null}

        {secondaryExpenseClickClothing ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Pants"
              category="secondaryExpenseGroceries"
            ></TileButton>
          </div>
        ) : null}

        {secondaryExpenseClickHealthcare ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Doctor appointments"
              category="secondaryExpenseGroceries"
            ></TileButton>
          </div>
        ) : null}
        {secondaryExpenseClickHousehold ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Furniture"
              category="secondaryExpenseGroceries"
            ></TileButton>
          </div>
        ) : null}
        {secondaryExpenseClickJobExpense ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Devices"
              category="secondaryExpenseGroceries"
            ></TileButton>
          </div>
        ) : null}
        {secondaryExpenseClickPets ? (
          <div className="flex flex-wrap justify-center mt-2 duration-300 ease-in-out border-t-2 border-dashed border-amber-400/50">
            <TileButton
              buttonName="Vet"
              category="secondaryExpenseGroceries"
            ></TileButton>
          </div>
        ) : null}

        <input
          type="submit"
          value="Submit"
          className="py-2 mx-auto mt-5 font-bold tracking-wider text-red-700 duration-300 ease-in-out border rounded border-amber-400 sm:border-2 hover:text-amber-400 hover:bg-red-700 px-7"
        />
      </form>
      <div className="mx-auto mb-10 text-center text-amber-400">
        <h2 className="pt-3 font-bold">Latest Records</h2>
        <table className="mx-auto mt-1 border-2 border-amber-400">
          <tr>
            <td className="px-2 border-r-2 border-amber-400">
              {dataToDisplay[0]}
            </td>
            <td className="px-2 border-r-2 border-amber-400">
              {dataToDisplay[1]}
            </td>
            <td className="px-2 border-r-2 border-amber-400">
              {dataToDisplay[2] || dataToDisplay[3]}
            </td>
            <td className="px-2 border-r-2 border-amber-400">
              {dataToDisplay[4] ||
                dataToDisplay[5] ||
                dataToDisplay[6] ||
                dataToDisplay[7] ||
                dataToDisplay[8] ||
                dataToDisplay[9] ||
                dataToDisplay[10] ||
                dataToDisplay[11] ||
                dataToDisplay[12] ||
                dataToDisplay[13] ||
                dataToDisplay[14] ||
                dataToDisplay[15]}
            </td>
            <td className="px-2 border-r-2 border-amber-400">{}</td>
          </tr>
        </table>
      </div>
    </>
  );
}
