import { useState } from "react"

export default function MenuButton(){

const [isClicked, setIsClicked] = useState()

const menuClick = ()=>{
  setIsClicked(!isClicked);
}

console.log(isClicked)

  return(
    <>
      <div className="fixed flex justify-center w-full h-full mx-auto duration-1000 ease-in-out bg-black/90 z-9" style={{translate: isClicked ? '0px' : '-2000px'}}>
        <div className="flex flex-col m-auto">
          <h1 className="mx-auto text-3xl text-amber-400 pb-7">Login</h1>
          <h1 className="mx-auto text-3xl text-amber-400">Home</h1>
          <h1 className="mx-auto text-3xl text-amber-400">About</h1>
        </div>
      </div>
      <button onClick={menuClick}>
      <i className="absolute top-0 left-0 z-10 m-5 text-2xl duration-1000 ease-in-out fa fa-sharp fa-solid fa-bars text-amber-400 sm:text-4xl sm:m-8 hover:text-amber-600" style={{rotate: isClicked ? 'z 360deg' : 'z 0deg'}}></i>
      </button>
    </>
  )
}