/* eslint-disable react/prop-types */
export default function Input(props){
  return(
    <div className="flex justify-center pt-5">
      <input type="currency" placeholder={props.placeholder} className="bg-transparent border-2 border-amber-400 rounded text-amber-400 text-center"></input>
    </div>
  )
}