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
        <div className="flex flex-col m-auto">
          <Link
            to="/MoneyLeaks/login"
            className="mx-auto mb-16 text-3xl text-amber-400"
            onClick={menuClick}
          >
            Log In
          </Link>
          <Link
            to="/MoneyLeaks"
            className="mx-auto text-3xl text-amber-400"
            onClick={menuClick}
          >
            Home
          </Link>
          <Link
            to="/MoneyLeaks/statistics"
            className="mx-auto text-3xl text-amber-400"
            onClick={menuClick}
          >
            Statistics
          </Link>
          <Link
            to="/MoneyLeaks/account"
            className="mx-auto text-3xl text-amber-400"
            onClick={menuClick}
          >
            Account Settings
          </Link>
          <Link
            to="/MoneyLeaks/login"
            className="mx-auto mt-16 text-3xl text-amber-400"
            onClick={menuClick}
          >
            Log Out
          </Link>
        </div>
      </div>
      <button onClick={menuClick}>
        <i
          className="absolute top-0 left-0 z-50 m-5 text-2xl duration-1000 ease-in-out fa fa-sharp fa-solid fa-bars text-amber-400 sm:text-4xl sm:m-8 hover:text-amber-600"
          style={{ rotate: isClicked ? "z 360deg" : "z 0deg" }}
        ></i>
      </button>
    </>
  );
}
