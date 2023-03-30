import React from "react";

const Register = ({ handleLogin }) => {
  return (
    <div className=" h-[70%]  w-[80%] md:w-[70%] rounded-xl flex flex-col  gap-2">
      <h3 className="text-3xl">Create an account</h3>
      <p className="text-gray-500 text-sm">
       Please enter your email and  a password for your account.
      </p>
      <form className="flex flex-col gap-2 mt-5">
        <label>Email</label>
        <input placeholder="Email" className="login-input" />
        <label>Password</label>
        <input placeholder="Password" className="login-input"></input>
        <label>Confirm password</label>
        <input placeholder="Confirm password" className="login-input"></input>
        

        <button className="login-btn mt-5">Register</button>
       


<p className="text-gray-500 text-sm m-auto mt-5">
           Have an account? {" "}
          <span>
            {" "}
            <button
              onClick={handleLogin}
              className="text-md underline text-blue-500"
            >
              Login
            </button>
          </span>
        </p>

       
      </form>
    </div>
  );
};

export default Register;
