import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuButton() {
  const [isClicked, setIsClicked] = useState();

  const menuClick = () => {
    setIsClicked(!isClicked);
  };

  console.log(isClicked);

  return (
    <>
      <div
        className="fixed z-50 flex justify-center w-full h-full mx-auto duration-1000 ease-in-out bg-black/90"
        style={{ translate: isClicked ? "0px" : "-2000px" }}
        id="menuButton"
      >
        <div className="flex flex-col w-full m-auto">
          <Link
            to="/MoneyLeaks/login"
            className="w-full pb-2 mx-auto mb-16 text-3xl text-center transition duration-500 ease-in-out text-amber-400 hover:text-black hover:bg-amber-400"
            onClick={menuClick}
          >
            Log In
          </Link>
          <Link
            to="/MoneyLeaks"
            className="w-full pb-2 mx-auto text-3xl text-center transition duration-500 ease-in-out text-amber-400 hover:text-black hover:bg-amber-400"
            onClick={menuClick}
          >
            Home
          </Link>
          <Link
            to="/MoneyLeaks/statistics"
            className="w-full pb-2 mx-auto text-3xl text-center transition duration-500 ease-in-out text-amber-400 hover:text-black hover:bg-amber-400"
            onClick={menuClick}
          >
            Statistics
          </Link>
          <Link
            to="/MoneyLeaks/budget"
            className="w-full pb-2 mx-auto text-3xl text-center transition duration-500 ease-in-out text-amber-400 hover:text-black hover:bg-amber-400"
            onClick={menuClick}
          >
            Budget
          </Link>
          <Link
            to="/MoneyLeaks/account"
            className="w-full pb-2 mx-auto text-3xl text-center transition duration-500 ease-in-out text-amber-400 hover:text-black hover:bg-amber-400"
            onClick={menuClick}
          >
            Account Settings
          </Link>
          <Link
            to="/MoneyLeaks/login"
            className="w-full pb-2 mx-auto mt-16 text-3xl text-center transition duration-500 ease-in-out text-amber-400 hover:text-black hover:bg-amber-400"
            onClick={menuClick}
          >
            Log Out
          </Link>
        </div>
      </div>
      <button onClick={menuClick}>
        <i
          className="fixed top-0 left-0 z-50 m-5 text-2xl duration-1000 ease-in-out fa fa-sharp fa-solid fa-bars text-amber-400 sm:text-4xl sm:m-8 hover:text-amber-600"
          style={{ rotate: isClicked ? "z 360deg" : "z 0deg" }}
        ></i>
      </button>
    </>
  );
}
