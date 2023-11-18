export default function SignupPage() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-3/4 border-2 align-center border-amber-400">
        <input
          type="text"
          name="userId"
          id="userId"
          placeholder="Enter your user ID"
          className="w-3/4 px-2 mx-auto mt-6 text-center h-7"
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter Password"
          className="w-3/4 px-2 mx-auto mt-6 text-center h-7"
        />
        <input
          type="text"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="Confirm Password"
          className="w-3/4 px-2 mx-auto mt-3 text-center h-7"
        />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter First Name"
          className="w-3/4 px-2 mx-auto text-center mt-9 h-7"
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter Last Name"
          className="w-3/4 px-2 mx-auto mt-3 text-center h-7"
        />
        <button className="w-1/2 px-2 mx-auto my-6 border-2 border-amber-400 text-amber-400">
          Signup
        </button>
        <button className="w-3/4 px-2 mx-auto my-3 border-2 border-amber-400 text-amber-400">
          Signup with Google
        </button>
        <button className="w-3/4 px-2 mx-auto mb-6 border-2 border-amber-400 text-amber-400">
          Signup with Facebook
        </button>
      </div>
    </div>
  );
}
