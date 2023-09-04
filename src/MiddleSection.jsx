import { useState } from "react";
import Input from "./Input";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import TileButton from "./TileButton";


export default function MiddleSection(){

const [expenseClick, setExpenseClick] = useState(false);
const [incomeClick, setIncomeClick] = useState(false);
const [secondaryExpenseClickAutomobile, setSecondaryExpenseClickAutomobile] = useState(false);
const [secondaryExpenseClickGroceries, setSecondaryExpenseClickGroceries] = useState(false);

const expenseButtonClick = () => {
  setExpenseClick(!expenseClick);
  if (!expenseClick) {
    setIncomeClick(false);
    setSecondaryExpenseClickGroceries(false)
  }
};

const incomeButtonClick = () => {
  setIncomeClick(!incomeClick);
  if(!incomeClick) {
    setExpenseClick(false);
    setSecondaryExpenseClickGroceries(false)
  }
};

const secondaryExpenseButtonClickAutomobile = () => {
  setSecondaryExpenseClickAutomobile(!secondaryExpenseClickAutomobile);
  if (!secondaryExpenseClickAutomobile) {
    setIncomeClick(false);
    setSecondaryExpenseClickGroceries(false)
  }
};

const secondaryExpenseButtonClickGroceries = () => {
  setSecondaryExpenseClickGroceries(!secondaryExpenseClickGroceries);
  if (!secondaryExpenseClickGroceries) {
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false)
  }
};


  return (
    <form className="flex flex-col">
      <Input type='number' placeholder='Enter the amount'></Input>
      <Calendar className="mt-3 mx-auto bg-amber-400 hidden"/>
      <div className="flex justify-center my-2">
        <TileButton buttonName='Expense' category='primary' onClick={expenseButtonClick}></TileButton>
        <TileButton buttonName='Income' category='primary' onClick={incomeButtonClick}></TileButton>
      </div>
      {expenseClick ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Automobile' category='primaryExpense' onClick={secondaryExpenseButtonClickAutomobile}></TileButton>
          <TileButton buttonName='Bank Charges' category='primaryExpense'></TileButton>
          <TileButton buttonName='Bills' category='primaryExpense'></TileButton>
          <TileButton buttonName='Children' category='primaryExpense'></TileButton>
          <TileButton buttonName='Clothing' category='primaryExpense'></TileButton>
          <TileButton buttonName='Food' category='primaryExpense'></TileButton>
          <TileButton buttonName='Dining Out' category='primaryExpense'></TileButton>
          <TileButton buttonName='Entertainment' category='primaryExpense'></TileButton>
          <TileButton buttonName='Gifts' category='primaryExpense'></TileButton>
          <TileButton buttonName='Groceries' category='primaryExpense' onClick={secondaryExpenseButtonClickGroceries}></TileButton>
          <TileButton buttonName='Helathcare' category='primaryExpense'></TileButton>
          <TileButton buttonName='Household' category='primaryExpense'></TileButton>
          <TileButton buttonName='Insurance' category='primaryExpense'></TileButton>
          <TileButton buttonName='Job Expense' category='primaryExpense'></TileButton>
          <TileButton buttonName='Mortgage/Rent' category='primaryExpense'></TileButton>
          <TileButton buttonName='Pets' category='primaryExpense'></TileButton>
          <TileButton buttonName='Taxes' category='primaryExpense'></TileButton>
          <TileButton buttonName='Other' category='primaryExpense'></TileButton>
        </div>
      ) : null}
      {incomeClick ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName="Salary" category='primaryIncome'></TileButton>
          <TileButton buttonName="Bank" category='primaryIncome'></TileButton>
          <TileButton buttonName="Investment Income" category='primaryIncome'></TileButton>
          <TileButton buttonName="Other" category='primaryIncome'></TileButton>
        </div>
      ) : null}
      {secondaryExpenseClickGroceries ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Food' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Alcohol' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Automobile' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Housing' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Other' category='secondaryExpenseGroceries'></TileButton>
        </div>
      ) : null}
      {secondaryExpenseClickAutomobile ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Gasoline' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Insurance' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Maintenance' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Other' category='secondaryExpenseGroceries'></TileButton>
        </div>
      ) : null}
      <input type="submit" value="Submit" className="text-red-700 border sm:border-2 font-bold tracking-wider border-amber-400 rounded ease-in-out duration-300 mt-5 mx-auto hover:text-amber-400 hover:bg-red-700 px-7 py-2"/>
    </form>
  )
}