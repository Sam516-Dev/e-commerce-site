import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="h-screen">
      <form className=" bg-blue-200 mt-32 w-1/3 h-auto mx-auto p-4 py-6">
        <h2 className="text-2xl font-bold text-center text-blue-900">
          {" "}
          Sign In{" "}
        </h2>
        <div className="flex flex-col gap-5 mt-5">
          <input
            className="w-full p-3 font-semibold text-blue-800 rounded-md outline-none"
            placeholder="Enter Username"
          />
          <input
            className="w-full p-3 font-semibold text-blue-800 rounded-md outline-none"
            placeholder="Email"
          />
          <input
            className="w-full p-3 font-semibold text-blue-800 rounded-md outline-none"
            placeholder="Password"
          />
          <input
            className="w-full p-3 font-semibold text-blue-800 rounded-md outline-none"
            placeholder="Confirm Password"
          />
          <button className="p-3 mt-6 bg-blue-900 text-white rounded-md text-xl font-semibold uppercase">
            {" "}
            Sign In
          </button>
          <div className="flex gap-3 justify-center mt-4">
            <p>Have an account ?</p>
            <Link to={"/signIn"}>
              <span className="text-indigo-600 font-semibold"> Sign Up </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
