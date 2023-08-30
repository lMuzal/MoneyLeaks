import Input from "./Input";
import TileGroup from "./TileGroup";


export default function Middle(){



  return (
    <>
      <Input type='number' placeholder='Enter the amount'></Input>
      <TileGroup className="firstDivision" category='type' tileName1='Expense' tileName2='Income'></TileGroup>
      <TileGroup className="secondDivision" category='generalExpenses' tileName1='Groceries' tileName2='Housing' tileName3='Automobile' tileName4='Taxes' tileName5='Other'></TileGroup>
      <TileGroup className="thirdDivision" category='detailedExpenses' tileName1='Foods' tileName2='Treats' tileName3='Supplements' tileName4='Alcohol' tileName5='Other'></TileGroup>
    </>
  )
}