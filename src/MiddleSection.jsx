import { useState } from "react";
import Input from "./Input";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import TileButton from "./TileButton";


export default function MiddleSection(){

const [expenseClick, setExpenseClick] = useState(false);
const [incomeClick, setIncomeClick] = useState(false);
const [secondaryExpenseClickAutomobile, setSecondaryExpenseClickAutomobile] = useState(false);
const [secondaryExpenseClickBills, setSecondaryExpenseClickBills] = useState(false);
const [secondaryExpenseClickChildren, setSecondaryExpenseClickChildren] = useState(false);
const [secondaryExpenseClickClothing, setSecondaryExpenseClickClothing] = useState(false);
const [secondaryExpenseClickDiningOut, setSecondaryExpenseClickDiningOut] = useState(false);
const [secondaryExpenseClickEntertainment, setSecondaryExpenseClickEntertainment] = useState(false);
const [secondaryExpenseClickGifts, setSecondaryExpenseClickGifts] = useState(false);
const [secondaryExpenseClickGroceries, setSecondaryExpenseClickGroceries] = useState(false);
const [secondaryExpenseClickHealthcare, setSecondaryExpenseClickHealthcare] = useState(false);
const [secondaryExpenseClickHousehold, setSecondaryExpenseClickHousehold] = useState(false);
const [secondaryExpenseClickJobExpense, setSecondaryExpenseClickJobExpense] = useState(false);
const [secondaryExpenseClickPets, setSecondaryExpenseClickPets] = useState(false);
const [secondaryExpenseClickOther, setSecondaryExpenseClickOther] = useState(false);

const expenseButtonClick = () => {
  setExpenseClick(!expenseClick);
  if (!expenseClick) {
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
    setSecondaryExpenseClickHealthcare(false);
    setSecondaryExpenseClickHousehold(false);
    setSecondaryExpenseClickJobExpense(false);
    setSecondaryExpenseClickPets(false);
    setSecondaryExpenseClickOther(false);
  }
};

const incomeButtonClick = () => {
  setIncomeClick(!incomeClick);
  if(!incomeClick) {
    setExpenseClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
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
    setIncomeClick(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
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
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
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
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
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
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
    setSecondaryExpenseClickHealthcare(false);
    setSecondaryExpenseClickHousehold(false);
    setSecondaryExpenseClickJobExpense(false);
    setSecondaryExpenseClickPets(false);
    setSecondaryExpenseClickOther(false);
  }
};

const secondaryExpenseButtonClickDiningOut = () => {
  setSecondaryExpenseClickDiningOut(!secondaryExpenseClickDiningOut);
  if (!secondaryExpenseClickDiningOut) {
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
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
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
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
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGroceries(false);
    setSecondaryExpenseClickHealthcare(false);
    setSecondaryExpenseClickHousehold(false);
    setSecondaryExpenseClickJobExpense(false);
    setSecondaryExpenseClickPets(false);
    setSecondaryExpenseClickOther(false);
  }
};

const secondaryExpenseButtonClickGroceries = () => {
  setSecondaryExpenseClickGroceries(!secondaryExpenseClickGroceries);
  if (!secondaryExpenseClickGroceries) {
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
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
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
    setSecondaryExpenseClickHousehold(false);
    setSecondaryExpenseClickJobExpense(false);
    setSecondaryExpenseClickPets(false);
    setSecondaryExpenseClickOther(false);
  }
};

const secondaryExpenseButtonClickHousehold = () => {
  setSecondaryExpenseClickHousehold(!secondaryExpenseClickHousehold);
  if (!secondaryExpenseClickHousehold) {
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
    setSecondaryExpenseClickHealthcare(false);
    setSecondaryExpenseClickJobExpense(false);
    setSecondaryExpenseClickPets(false);
    setSecondaryExpenseClickOther(false);
  }
};

const secondaryExpenseButtonClickJobExpense = () => {
  setSecondaryExpenseClickJobExpense(!secondaryExpenseClickJobExpense);
  if (!secondaryExpenseClickJobExpense) {
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
    setSecondaryExpenseClickHealthcare(false);
    setSecondaryExpenseClickHousehold(false);
    setSecondaryExpenseClickPets(false);
    setSecondaryExpenseClickOther(false);
  }
};

const secondaryExpenseButtonClickPets = () => {
  setSecondaryExpenseClickPets(!secondaryExpenseClickPets);
  if (!secondaryExpenseClickPets) {
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
    setSecondaryExpenseClickHealthcare(false);
    setSecondaryExpenseClickHousehold(false);
    setSecondaryExpenseClickJobExpense(false);
    setSecondaryExpenseClickOther(false);
  }
};

const secondaryExpenseButtonClickOther = () => {
  setSecondaryExpenseClickOther(!secondaryExpenseClickOther);
  if (!secondaryExpenseClickOther) {
    setIncomeClick(false);
    setSecondaryExpenseClickAutomobile(false);
    setSecondaryExpenseClickBills(false);
    setSecondaryExpenseClickChildren(false);
    setSecondaryExpenseClickClothing(false);
    setSecondaryExpenseClickDiningOut(false);
    setSecondaryExpenseClickEntertainment(false);
    setSecondaryExpenseClickGifts(false);
    setSecondaryExpenseClickGroceries(false);
    setSecondaryExpenseClickHealthcare(false);
    setSecondaryExpenseClickHousehold(false);
    setSecondaryExpenseClickJobExpense(false);
    setSecondaryExpenseClickPets(false);
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
          <TileButton buttonName='Bills' category='primaryExpense'onClick={secondaryExpenseButtonClickBills}></TileButton>
          <TileButton buttonName='Children' category='primaryExpense' onClick={secondaryExpenseButtonClickChildren}></TileButton>
          <TileButton buttonName='Clothing' category='primaryExpense'onClick={secondaryExpenseButtonClickClothing}></TileButton>
          <TileButton buttonName='Dining Out' category='primaryExpense'onClick={secondaryExpenseButtonClickDiningOut}></TileButton>
          <TileButton buttonName='Entertainment' category='primaryExpense'onClick={secondaryExpenseButtonClickEntertainment}></TileButton>
          <TileButton buttonName='Gifts' category='primaryExpense'onClick={secondaryExpenseButtonClickGifts}></TileButton>
          <TileButton buttonName='Groceries' category='primaryExpense' onClick={secondaryExpenseButtonClickGroceries}></TileButton>
          <TileButton buttonName='Helathcare' category='primaryExpense'onClick={secondaryExpenseButtonClickHealthcare}></TileButton>
          <TileButton buttonName='Household' category='primaryExpense'onClick={secondaryExpenseButtonClickHousehold}></TileButton>
          <TileButton buttonName='Job Expense' category='primaryExpense'onClick={secondaryExpenseButtonClickJobExpense}></TileButton>
          <TileButton buttonName='Pets' category='primaryExpense'onClick={secondaryExpenseButtonClickPets}></TileButton>
          <TileButton buttonName='Other' category='primaryExpense'onClick={secondaryExpenseButtonClickOther}></TileButton>
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
      {secondaryExpenseClickAutomobile ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Gasoline' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Insurance' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Maintenance' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Other' category='secondaryExpenseGroceries'></TileButton>
        </div>
      ) : null}

      {secondaryExpenseClickBills ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Electricity' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Water & Sewer' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Rent' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Phone' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Taxes' category='secondaryExpenseGroceries'></TileButton>
        </div>
      ) : null}
      {secondaryExpenseClickChildren ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Children' category='secondaryExpenseGroceries'></TileButton>
          
        </div>
      ) : null}

      {secondaryExpenseClickClothing ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Pants' category='secondaryExpenseGroceries'></TileButton>
          
        </div>
      ) : null}   

      {secondaryExpenseClickGroceries ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Food' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Alcohol' category='secondaryExpenseGroceries'></TileButton>
          <TileButton buttonName='Other' category='secondaryExpenseGroceries'></TileButton>
        </div>
      ) : null}
      {secondaryExpenseClickHealthcare ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Doctor appointments' category='secondaryExpenseGroceries'></TileButton>
          
        </div>
      ) : null}
      {secondaryExpenseClickHousehold ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Furniture' category='secondaryExpenseGroceries'></TileButton>
          
        </div>
      ) : null}
      {secondaryExpenseClickJobExpense ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Devices' category='secondaryExpenseGroceries'></TileButton>
          
        </div>
      ) : null}
      {secondaryExpenseClickPets ? (
        <div className="flex flex-wrap justify-center ease-in-out duration-300 border-t-2 border-amber-400/50 border-dashed mt-2">
          <TileButton buttonName='Vet' category='secondaryExpenseGroceries'></TileButton>
          
        </div>
      ) : null}
      
      <input type="submit" value="Submit" className="text-red-700 border sm:border-2 font-bold tracking-wider border-amber-400 rounded ease-in-out duration-300 mt-5 mx-auto hover:text-amber-400 hover:bg-red-700 px-7 py-2"/>
    </form>
  )
}