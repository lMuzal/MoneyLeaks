import { useState } from "react"

export default function MenuButton(){

const [isClicked, setIsClicked] = useState()

const menuClick = ()=>{
  setIsClicked(!isClicked);
}

console.log(isClicked)

  return(
    <>
      <div className="flex justify-center h-full w-full bg-black/90 z-9 fixed ease-in-out duration-1000" style={{translate: isClicked ? '0px' : '-1500px'}}>
        <div className="flex flex-col m-auto">
          <h1 className="text-amber-400 text-3xl pb-7">Login</h1>
          <h1 className="text-amber-400 text-3xl">Home</h1>
          <h1 className="text-amber-400 text-3xl">About</h1>
        </div>
      </div>
      <button onClick={menuClick}>
      <i className="fa fa-sharp fa-solid fa-bars text-2xl text-amber-400 m-5 absolute top-0 left-0 sm:text-4xl sm:m-8 hover:text-amber-600 ease-in-out duration-1000 z-10" style={{rotate: isClicked ? 'z 360deg' : 'z 0deg'}}></i>
      </button>
    </>
  )
}