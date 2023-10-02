/* eslint-disable react/prop-types */
export default function TileButton(props){
  return(
    <label> 
      <input type="radio" className='sr-only radio-button peer' name={props.category} value={props.buttonName}/>
      <div className="px-2 mx-1 mt-2 font-bold tracking-wider duration-300 ease-in-out border rounded text-amber-400 sm:border-2 border-amber-400 py-1/2 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500 sm:px-5" onClick={props.onClick}>{props.buttonName}</div>
    </label>
  )
}