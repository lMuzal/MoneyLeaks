import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col w-3/4 border-2 align-center border-amber-400">
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Enter Login"
            className="w-3/4 px-2 mx-auto mt-6 text-center h-7"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="w-3/4 px-2 mx-auto mt-3 text-center h-7"
          />
          <div className="flex flex-row justify-center pt-3 text-amber-400">
            <label>
              Keep me logged in
              <input
                type="checkbox"
                className="float-left mt-2 mr-1 checked:bg-amber-400"
              />
            </label>
          </div>
          <button className="w-1/2 px-2 mx-auto my-6 border-2 border-amber-400 text-amber-400">
            Login
          </button>
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <h2 className="text-amber-400">
          Not a registered user?{" "}
          <Link
            to="/MoneyLeaks/signup"
            className="mb-16 text-xl text-amber-400"
          >
            Signup
          </Link>
        </h2>
      </div>
    </div>
  );
}
