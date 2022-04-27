import React from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";

const UserLogin = () => {
  return (
    <div className="w-auto mx-auto">
      <div className="flex flex-col gap-3 my-6 w-80">
        <input type="text" placeholder="Username" className="p-4 rounded-md" />
        <input
          type="password"
          placeholder="Password"
          className="p-4 rounded-md"
        />
        <Link
          to="/"
          className="flex justify-between font-bold bg-white rounded-md"
        >
          <span className="p-4 font-bold text-red">Signin</span>
          <span className="h-full p-4 bg-red-700 w-30">
            <IoMdLogIn className="w-6 h-6 text-white" />
          </span>
        </Link>
      </div>
      <Link to="/" className="text-xs text-gray-100">
        Forgot Password?
      </Link>
      <h5 className="my-4 text-xs text-gray-100">
        Don't have an account?{" "}
        <Link to="/" className="border-b-2 border-white border-solid">
          Signup
        </Link>
      </h5>
    </div>
  );
};

export default UserLogin;
