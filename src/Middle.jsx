import Input from "./Input";
import Tile from "./Tile";


export default function Middle(){
  return (
    <>
      <Input placeholder='Enter the amount'></Input>
      <div className="flex flex-wrap justify-center pt-5">
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Income'></Tile>
      </div>
      <div className="flex flex-wrap justify-center pt-5">
        <Tile tileName='Groceries'></Tile>
        <Tile tileName='House'></Tile>
        <Tile tileName='Gasoline'></Tile>
        <Tile tileName='Taxes'></Tile>
        <Tile tileName='Other'></Tile>
      </div>
      <div className="flex flex-wrap justify-center pt-5">
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Expense'></Tile>
        <Tile tileName='Expense'></Tile>
      </div>
    </>
  )
}