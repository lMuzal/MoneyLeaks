import { useState } from "react";
import Input from "./Input";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import TileButton from "./TileButton";


export default function MiddleSection(){

const [expenseClick, setExpenseClick] = useState(false);
const expenseButtonClick = () => {
  setExpenseClick(!expenseClick);
  if (!expenseClick) {
    setIncomeClick(false);
  }
};

const [incomeClick, setIncomeClick] = useState(false);
const incomeButtonClick = () => {
  setIncomeClick(!incomeClick);
  if(!incomeClick) {
    setExpenseClick(false);
  }
};


  return (
    <form className="flex flex-col">
      <Input type='number' placeholder='Enter the amount'></Input>
      <Calendar className="mt-3 mx-auto bg-amber-400 hidden"/>
      <div className="flex justify-center">
        <TileButton buttonName='Expense' category='primary' onClick={expenseButtonClick}></TileButton>
        <TileButton buttonName='Income' category='primary' onClick={incomeButtonClick}></TileButton>
      </div>
      {expenseClick ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Groceries' category='primaryExpense'></TileButton>
          <TileButton buttonName='Food' category='primaryExpense'></TileButton>
          <TileButton buttonName='Automobile' category='primaryExpense'></TileButton>
          <TileButton buttonName='Housing' category='primaryExpense'></TileButton>
          <TileButton buttonName='Other' category='primaryExpense'></TileButton>
        </div>
      ) : null}
      {incomeClick ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName="Salary" category='primaryIncome'></TileButton>
          <TileButton buttonName="Bank" category='primaryIncome'></TileButton>
          <TileButton buttonName="Other" category='primaryIncome'></TileButton>
        </div>
      ) : null}
      <input type="submit" value="Submit" className="text-amber-400 border sm:border-2 font-bold tracking-wider border-amber-400 rounded ease-in-out duration-300 w-1/6 mt-5 mx-auto hover:text-lime-900 hover:bg-amber-400"/>
    </form>
  )
}