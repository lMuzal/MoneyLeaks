/* eslint-disable react/prop-types */
import Tile from "./Tile";

export default function TileGroup(props) {
  const filteredTileNames = Object.keys(props)
    .filter((propName) => propName.startsWith("tileName") && props[propName])
    .map((propName) => props[propName]);
    

  return (
    <div className="flex flex-wrap justify-center pt-7">
      {filteredTileNames.map((tileName, index) => (
        <Tile key={index} category={props.category} tileName={tileName} />
      ))}
    </div>
  );
}