import Header from "./Header";
import MiddleSection from "./MiddleSection";

export default function App(){
  return(
    <>
      <Header></Header>
      <MiddleSection></MiddleSection>
    </>
  )
}

//alternate opation

// import {useState} from 'react';

// export default function App(){
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({});
//   const [inputValue, setInputValue] = useState('');

//   const buttonOptions = {
//     1: ['Expense', 'Income'],
//     2: ['Option C', 'Option D'],
//     // Add more options for each step
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = (option) => {
//     // Update the current step and any other state changes
//     setCurrentStep(currentStep, currentStep + 1);

//     // Update form data object with selected option
//     setFormData({ ...formData, ...inputValue, [currentStep]: option });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Do something with the formData object (e.g., send it to a server)
//     console.log(formData);
//   };

//   return (
//     <div className='flex justify-center'>
//       <form onSubmit={handleSubmit} className='flex flex-col'>
//         {/* Your input element */}
//         <input type="number" value={inputValue} onChange={handleInputChange} placeholder="Enter the amount" className='text-amber-400 text-center bg-transparent border-2 border-amber-400'/>

//         {/* Render buttons based on the current step */}
//         {buttonOptions[currentStep].map((option, index) => (
//           <label key={index}>
//             <input type='radio' onChange={() => handleButtonClick(option)} className='radio-button peer sr-only'/>
//             <div className='text-amber-400 border sm:border-2 font-bold tracking-wider border-amber-400 py-1/2 px-5 mx-1 rounded ease-in-out duration-300 hover:text-lime-900 hover:bg-amber-400 peer-checked:text-lime-900 peer-checked:bg-amber-500'>{option}</div>
//           </label>
//         ))}

//         {/* Submit button */}
//         <button type="submit" className='text-amber-400'>Submit</button>
//       </form>
//     </div>
//   );
// }