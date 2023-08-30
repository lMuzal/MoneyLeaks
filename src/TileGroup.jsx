/* eslint-disable react/prop-types */
import Tile from "./Tile";

export default function TileGroup(props) {

  const filteredTileNames = Object.keys(props)
    .filter((propName) => propName.startsWith("tileName") && props[propName])
    .map((propName) => props[propName]);

  

  // let classVisibility = '';

  // if (props.className == "thirdDivision"){
  //   classVisibility = "hidden";
  // } 
  // else ;
    
  return (
    <div className='flex flex-wrap justify-center border-t-2 border-amber-400/50 my-4 border-dashed'>
      {filteredTileNames.map((tileName, index) => (
        <Tile key={index} category={props.category} tileName={tileName} classNameDivision={props.className}/>
      ))}
    </div>
  );
}