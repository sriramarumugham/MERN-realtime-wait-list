import React from "react";
import mainLogo from "../utils/google.png";

const Login = ({ handleLogin }) => {
  return (
    <div className=" h-[70%]  w-[80%] md:w-[70%] rounded-xl flex flex-col  gap-2">
      <h3 className="text-3xl">Hey, hello!</h3>
      <p className="text-gray-500 text-sm">
        Enter the information you entered while you registering.
      </p>
      <form className="flex flex-col gap-2 mt-5">
        <label>Email</label>
        <input placeholder="Email" className="login-input" />
        <label>Password</label>
        <input placeholder="Password" className="login-input"></input>
        <button className="login-btn mt-5">Login</button>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-[45%] h-[0.4px]  bg-slate-500/50 "></div>
          <p>OR</p>
          <div className="w-[45%] h-[0.4px]  bg-slate-500/50 "></div>
        </div>

      

        <p className="text-gray-500 text-sm m-auto mt-5">
          Not registered?{" "}
          <span>
            {" "}
            <button
              onClick={handleLogin}
              className="text-md underline text-blue-500"
            >
              Create an account
            </button>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
