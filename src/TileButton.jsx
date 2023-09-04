/* eslint-disable react/prop-types */
export default function TileButton(props){
  return(
    <label> 
      <input type="radio" className='radio-button peer sr-only' name={props.category} value={props.buttonName}/>
      <div className="text-amber-400 border sm:border-2 font-bold tracking-wider border-amber-400 py-1/2 px-2 mx-1 mt-2 rounded ease-in-out duration-300 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500 sm:px-5" onClick={props.onClick}>{props.buttonName}</div>
    </label>
  )
}