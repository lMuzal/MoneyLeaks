/* eslint-disable react/prop-types */
export default function Tile(props){

  let classVisibility = '';
  

  // if (props.classNameDivision == "thirdDivision" || props.classNameDivision =="secondDivision"){
  //   classVisibility = "hidden";
  // }
  
  return(
      <div className={`pt-3  ${props.classNameDivision} ${classVisibility}` }>
        <label>
          <input type="radio" className='radio-button peer sr-only' name={props.category}/>
          <div className="text-amber-400 border sm:border-2 font-bold tracking-wider border-amber-400 py-1/2 px-5 mx-1 rounded ease-in-out duration-300 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500">{props.tileName}</div>
        </label>
      </div>
  )
}